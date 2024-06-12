import { builderInstance } from "@/app/util/builderInstance";

export const useHandleStepChangeFunc = (type) => {
  const builderInstanceFunc = builderInstance(type);
  const incrementSteps = (num) => {
    builderInstanceFunc.updateStep(num);
  };

  return { incrementSteps };
};
