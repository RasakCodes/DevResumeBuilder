import connect from "@/app/util/db/connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";
import Cv from "@/app/util/model/Cv";
import User from "@/app/util/model/User";

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
    const res = await Cv.create({ user: _id });
    return NextResponse.json({ message: res._id }, { status: 200 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json(
      {
        error: "error occur " + error,
      },
      { status: 500 }
    );
  }
};
