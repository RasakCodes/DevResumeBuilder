import connect from "@/app/util/db/connect";
import Cv from "@/app/util/model/Cv";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { id } = await request.json();
  await connect();
  if (!id) {
    return new NextResponse("No ID provided", { status: 400 });
  }

  try {
    const deletedCv = await Cv.findByIdAndDelete(id);

    if (!deletedCv) {
      return new NextResponse("Resource not found", { status: 404 });
    }

    return new NextResponse("Resource deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting the resource:", error);
    return new NextResponse("An error occurred", { status: 500 });
  }
}
