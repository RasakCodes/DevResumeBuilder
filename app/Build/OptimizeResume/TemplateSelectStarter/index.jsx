"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import ProjectCard from "../../shared/ProjectCard";
import { useCreateNeOptimizeResume } from "./hooks/useCreateNeOptimizeResume";

export default function TemplateSelectStarter() {
  const router = useRouter();
  const { toast } = useToast();
  const { createProject, isLoading } = useCreateNeOptimizeResume();
  async function handleCreateCV() {
    const { data } = await createProject();
    if (data?.message) {
      toast({
        title: "Success! ✅",
        description: "Project created",
      });
      router.push(`/Build/OptimizeResume?id=${data.message}`);
    }
  }
  return (
    <div className="bg-gray-100 ">
      <div className="  h-screen max-w-[90%] mx-auto">
        <div className="">
          <h1 className="text-3xl font-bold mb-8">
            Get Started With Optimizing You Resume
          </h1>

          <div className="flex flex-col gap-4">
            <ProjectCard
              text={"Create New Project"}
              desc={"Click here to create a new Project."}
              handleCreateCV={handleCreateCV}
              isLoading={isLoading}
            />
            <div className="border-t  border-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
