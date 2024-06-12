import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const TemplateCv1 = dynamic(
  () => import("./CoverLetterTemplate/TemplateCl1.jsx"),
  {
    loading: () => <Skeleton className="h-[90%] w-[700px]" />,
    ssr: false,
  }
);
const TemplateCl2 = dynamic(
  () => import("./CoverLetterTemplate/TemplateCl2.jsx"),
  {
    loading: () => <Skeleton className="h-[90%] w-full" />,
    ssr: false,
  }
);

const locate = "/CoverLetterTemplate";

const coverLetterTemplates = [
  {
    name: "Dev Resume 1",
    component: TemplateCv1,
    thumbnails: `${locate}/template-cl.png`,
  },
  {
    name: "Dev Resume 2",
    component: TemplateCl2,
    thumbnails: `${locate}/template-cl2.png`,
  },
];

export default coverLetterTemplates;
