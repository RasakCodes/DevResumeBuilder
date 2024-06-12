import { useRouter } from "next/navigation";
import { getSearchParams } from "../lib/getSearchParams";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useHandleStepChangeFunc } from "@/app/Build/Cv/hooks/usehandleStepChangeFunc";
import dynamic from "next/dynamic";
import Spin from "../spin";
import { ProgressTrackerSkeleton } from "../SkeletonsComponents";

const PaginateBoxMobile = dynamic(() => import("./PaginateBoxMobile"), {
  ssr: false,
  loading: () => <Spin />,
});

const PaginateBox = dynamic(() => import("./PaginateBox"), {
  ssr: false,
  loading: () => <ProgressTrackerSkeleton />,
});
const Stepper = ({ currentStep, handleStepChangeBack, steps, type }) => {
  const router = useRouter();
  const cvId = getSearchParams("id");
  const { incrementSteps } = useHandleStepChangeFunc(type);

  function handleSkip() {
    if (steps.length === currentStep + 1 && cvId) {
      return router.push(`/Build/${type}/${cvId}`);
    }
    incrementSteps();
  }

  return (
    <div className="flex items-start flex-col md:flex-row gap-x-10 w-full">
      <div className="hidden md:block" style={{ width: "30%" }}>
        <PaginateBox
          text={steps[currentStep]?.title}
          currentStep={currentStep}
          steps={steps}
          incrementSteps={incrementSteps}
        />
      </div>
      <div className="md:hidden flex justify-center items-center w-full ">
        <PaginateBoxMobile
          text={steps[currentStep]?.title}
          currentStep={currentStep}
          steps={steps}
          incrementSteps={incrementSteps}
        />
      </div>

      <div
        className="w-full md:w-[70%] flex flex-col justify-between"
        style={{ height: "100%" }}
      >
        <AnimatePresence mode="wait" className="h-[500]">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-lg"
          >
            <div className="w-full">{steps[currentStep || 0]?.content}</div>
          </motion.div>
        </AnimatePresence>

        <div
          className="flex justify-between items-end mt-10"
          style={{ display: "flex", alignItems: "end" }}
        >
          <button
            onClick={handleStepChangeBack}
            className="text-gray-800  py-2 px-4 rounded-l flex items-center gap-x-2"
          >
            <ArrowLeftIcon />
            <span> Go Back</span>
          </button>
          <div onClick={handleSkip}>
            <button className="text-gray-800  py-2 px-4 rounded-l">Skip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
