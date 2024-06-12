import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";
import User from "@/app/util/model/User";
import CoverLetter from "@/app/util/model/CoverLetter";
import connect from "@/app/util/db/connect";

export const POST = async () => {
  try {
    await connect();
    const { _id } = await getServerSession(authOptions);

    const user = await User.findById(_id);
    if (!user)
      return NextResponse.json(
        {
          error: "pls login",
        },
        { status: 404 }
      );
    const res = await CoverLetter.create({ user: _id });
    return NextResponse.json({ message: res._id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "error occur " + error,
      },
      { status: 500 }
    );
  }
};
