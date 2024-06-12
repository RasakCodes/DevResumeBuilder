import { NextResponse } from "next/server";
import axios from "axios";
import User from "@/app/util/model/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import Cv from "@/app/util/model/Cv";

export const POST = async (request) => {
  try {
    const session = await getServerSession(authOptions);

    const user = await User.findById(session?._id);
    if (!user)
      return NextResponse.json(
        {
          error: "Invalid Attepmt",
        },
        { status: 404 }
      );

    const { code } = await request.json();
    const tokenResponse = await exchangeForAccessToken(code);
    const userData = await fetchLinkedInData(tokenResponse.access_token);

    const cvRes = await createCvEntry(session._id, userData);

    return NextResponse.json({ message: cvRes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
};

async function exchangeForAccessToken(code) {
  const tokenParams = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
    client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
  }).toString();

  const tokenResponse = await axios.post(
    "https://www.linkedin.com/oauth/v2/accessToken",
    tokenParams,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  if (!tokenResponse.data.access_token) {
    throw new Error("Failed to obtain access token.");
  }

  return tokenResponse.data;
}

async function fetchLinkedInData(accessToken) {
  const res = await axios.get("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res?.data) {
    throw new Error("Invalid LinkedIn data.");
  }

  return res.data;
}

async function createCvEntry(userId, userData) {
  const cvEntry = await Cv.create({
    user: userId,
    firstName: userData?.given_name,
    lastName: userData?.family_name,
    email: userData?.email,
  });

  return cvEntry;
}
