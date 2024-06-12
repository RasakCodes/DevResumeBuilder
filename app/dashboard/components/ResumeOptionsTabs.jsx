import CoverLetterHistory from "@/app/Build/shared/CoverLetterHistory";
import ResumeHistory from "@/app/Build/shared/ResumeHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeOptionsTabs = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="cv" className="w-full">
        {" "}
        <TabsList className="flex justify-center items-center">
          <TabsTrigger value="cv">Cv</TabsTrigger>
          <TabsTrigger value="coverLetter">Cover Letter</TabsTrigger>
        </TabsList>
        <TabsContent value="cv" className="w-full">
          <div className="mt-10 w-full">
            <h1 className="text-center text-3xl underline">Cv</h1>
            <ResumeHistory />{" "}
          </div>
        </TabsContent>
        <TabsContent value="coverLetter">
          <div className="mt-10 w-full h-full">
            <h1 className="text-center text-3xl underline">Cover letter</h1>
            <CoverLetterHistory />
          </div>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeOptionsTabs;
