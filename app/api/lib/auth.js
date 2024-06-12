import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import User from "@/app/util/model/User";
import connect from "@/app/util/db/connect";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    // GitHubProvider({
    //   clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    // }),
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
      client: { token_endpoint_auth_method: "client_secret_post" },
      issuer: "https://www.linkedin.com",
      profile: (profile) => ({
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      }),
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, profile }) {
      try {
        await connect();
        const existingUser = await User.findOne({ email: user.email });
        const token = await generateToken(user.email);

        if (!existingUser) {
          const res = await User.create({
            email: user?.email,
            firstName: profile?.given_name || "",
            lastName: profile?.family_name || "",
            password: user.email,
            image: user?.image || "",
          });

          await setUserDetailsToCookie("token", token);
          await setUserDetailsToCookie("userID", res._id);
          return res;
        }
        await setUserDetailsToCookie("token", token);
        await setUserDetailsToCookie("userID", existingUser._id);
      } catch (error) {
        console.error("Error occurred during sign-in:", error);
        return false;
      }

      return true;
    },
    async session({ session, token }) {
      try {
        await connect();
        const newUser = await User.findOne({ email: token.email })
          .select("-password")
          .lean();
        return { ...newUser };
      } catch (error) {
        console.error("Error occurred during session retrieval:", error);
        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/error",
  },
};
async function generateToken(email) {
  return jwt.sign(
    {
      email,
    },
    process.env.NEXT_PUBLIC_JWT_SEC,
    {
      expiresIn: process.env.NEXT_PUBLIC_JWT_LIFETIME,
    }
  );
}
async function setUserDetailsToCookie(key, value) {
  cookies().set(key, value);
  cookies().set(key, value);
}

// https://www.linkedin.com/oauth/v2/authorization?client_id=78lj0qyyxagzm4&scope=r_liteprofile
//  r_emailaddress&response_type=code&
//  redirect_uri=http://localhost:3000/api/auth/callback/linkedin&state=8ZgRk_o7onf5_xE9HO78auoK7izuvBUR2KS_Xysnjok
