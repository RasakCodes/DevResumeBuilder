"use client";
import { coverLetterBuilder } from "@/shared/store/CVBuilderStore";
import Stepper from "@/shared/Build/Stepper";

const CoverLetter = () => {
  const { steps, currentStep, handleStepChangeBack } = coverLetterBuilder.store(
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
        type={"CoverLetter"}
      />
    </div>
  );
};

export default CoverLetter;
