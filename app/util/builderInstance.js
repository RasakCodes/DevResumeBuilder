import {
  coverLetterBuilder,
  cvBuilder,
  optimizeResume,
} from "@/shared/store/CVBuilderStore";

export const builderInstance = (type) => {
  switch (type) {
    case "CoverLetter":
      return coverLetterBuilder;
    case "optimizeResume":
      return optimizeResume;
    default:
      return cvBuilder;
  }
};
