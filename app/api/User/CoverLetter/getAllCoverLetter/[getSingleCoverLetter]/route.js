import connect from "@/app/util/db/connect";
import CoverLetter from "@/app/util/model/CoverLetter";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    await connect();
    const { getSingleCoverLetter: id } = params;
    const res = await CoverLetter.findById(id);
    if (!res)
      return NextResponse.json(
        { message: "no CoverLetter with this data" },
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
