import connect from "@/app/util/db/connect";
import Cv from "@/app/util/model/Cv";

export async function PATCH(request) {
  const formData = await request.formData();
  const id = formData.get("id");
  const newJobDesc = formData.get("JobDesc");

  if (!newJobDesc) {
    return new Response(
      JSON.stringify({ message: "No job description provided." }),
      {
        status: 400,
      }
    );
  }

  try {
    await connect();
    const cvData = await Cv.findById(id);
    if (!cvData) {
      return new Response(JSON.stringify({ message: "CV not found" }), {
        status: 404,
      });
    }

    await Cv.findByIdAndUpdate(
      id,
      { $set: { "optimizeResume.0.jobDesc": newJobDesc } },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "Job description updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating job description: ", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
