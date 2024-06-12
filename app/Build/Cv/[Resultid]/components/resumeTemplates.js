import { Skeleton } from "@/components/ui/skeleton";
import Spin from "@/shared/spin";
import dynamic from "next/dynamic";

const TemplateCv1 = dynamic(() => import("./ResumeTemplate/TemplateCv1"), {
  loading: () => <Skeleton className="h-[90%] w-[700px]" />,
  ssr: false,
});
const TemplateCv2 = dynamic(() => import("./ResumeTemplate/TemplateCv2"), {
  loading: () => <Skeleton className="h-[90%] w-full" />,
  ssr: false,
});
const TemplateCv6 = dynamic(() => import("./ResumeTemplate/TemplateCv6"), {
  loading: () => <Skeleton className="h-[90%] w-full" />,
  ssr: false,
});
const locate = "/ResumeTemplate";

export const resumeTemplates = [
  {
    name: "Dev Resume 1",
    component: TemplateCv1,
    thumbnails: `${locate}/template-cv1.svg`,
  },
  {
    name: "Dev Resume 2",
    component: TemplateCv2,
    thumbnails: `${locate}/template-cv2.svg`,
  },

  {
    name: "Dev Resume 6",
    component: TemplateCv6,
    thumbnails: `${locate}/template-cv6.png`,
  },
];

export default resumeTemplates;
