"use client";

import { cvBuilder } from "@/shared/store/CVBuilderStore";
import Stepper from "@/shared/Build/Stepper";

const Cv = () => {
  const { steps, currentStep, handleStepChangeBack } = cvBuilder.store(
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
        type={"Cv"}
      />
    </div>
  );
};

export default Cv;
