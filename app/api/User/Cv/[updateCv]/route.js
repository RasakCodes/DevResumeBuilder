import connect from "@/app/util/db/connect";
import Cv from "@/app/util/model/Cv";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const { updateCv: id } = params;
  const data = await request.json();

  try {
    await connect();

    const cv = await Cv.findById(id);
    if (!cv)
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    const updatedData = await Cv.findByIdAndUpdate(id, data, { new: true });

    return NextResponse.json({ message: updatedData }, { status: 200 });
  } catch (error) {}
};
