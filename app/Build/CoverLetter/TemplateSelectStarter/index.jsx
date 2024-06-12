"use client";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import ProjectCard from "../../shared/ProjectCard";
import { useCreateNewCoverLetter } from "./hooks/useCreateNewCoverLetter";
import CoverLetterHistory from "../../shared/CoverLetterHistory";

export default function TemplateSelectStarter() {
  const router = useRouter();
  const { toast } = useToast();
  const { createProject, isLoading } = useCreateNewCoverLetter();
  async function handleCreateCV() {
    const { data } = await createProject();
    if (data?.message) {
      toast({
        title: "Success! ✅",
        description: "Project created",
      });
      router.push(`/Build/CoverLetter?id=${data.message}`);
    }
  }
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-[90%] mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Get Started With Cover Letter
        </h1>

        <div className="flex flex-col gap-4">
          <ProjectCard
            text={"Create New Cover Letter"}
            desc={"Click here to create a new cover letter."}
            handleCreateCV={handleCreateCV}
            isLoading={isLoading}
          />
          <div className="border-t  border-2"></div>
          <h1 className="text-center text-4xl text-bold my-5">Continue</h1>
        </div>
      </div>
      <CoverLetterHistory />
    </div>
  );
}
