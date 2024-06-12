import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Cv from "@/app/util/model/Cv";
import { authOptions } from "@/app/api/lib/auth";
import connect from "@/app/util/db/connect";

export const GET = async () => {
  try {
    await connect();
    const { _id } = await getServerSession(authOptions);

    if (!_id)
      return NextResponse.json(
        {
          error: "pls login",
        },

        { status: 404 }
      );
    const res = await Cv.find({ user: _id });
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "error occur " + error,
      },
      { status: 500 }
    );
  }
};
