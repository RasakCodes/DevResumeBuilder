"use client";

import { optimizeResume } from "@/shared/store/CVBuilderStore";
import Stepper from "@/shared/Build/Stepper";

const OptimizeResume = () => {
  const { steps, currentStep, handleStepChangeBack } = optimizeResume.store(
    (state) => ({
      steps: state.steps,
      currentStep: state.currentStep,
      handleStepChangeBack: state.handleStepChangeBack,
    })
  );

  return (
    <div className="max-w-[90%] mx-auto my-20">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleStepChangeBack={handleStepChangeBack}
        type={"optimizeResume"}
      />
    </div>
  );
};

export default OptimizeResume;
