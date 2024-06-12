import connect from "@/app/util/db/connect";
import CoverLetter from "@/app/util/model/CoverLetter";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const { updateCoverLetter: id } = params;
  const data = await request.json();

  try {
    await connect();

    const coverLetter = await CoverLetter.findById(id);
    if (!coverLetter)
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    const updatedData = await CoverLetter.findByIdAndUpdate(id, data, {
      new: true,
    });

    return NextResponse.json({ message: updatedData }, { status: 200 });
  } catch (error) {}
};
