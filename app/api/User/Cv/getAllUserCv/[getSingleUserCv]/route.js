import connect from "@/app/util/db/connect";
import Cv from "@/app/util/model/Cv";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    await connect();
    const { getSingleUserCv: id } = params;
    const res = await Cv.findById(id);
    if (!res)
      return NextResponse.json(
        { message: "no CV with this data" },
        { status: 200 }
      );
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
