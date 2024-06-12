import WINDOW from "@/shared/lib/mockWindow";
import { create } from "zustand";
import dynamic from "next/dynamic";
import { EducationIcon } from "../component/icons/EducationIcon";
import { ExperienceIcon } from "../component/icons/Experience";
import { SkillIcon } from "../component/icons/SkillIcon";
import { MainFormSkeleton } from "../SkeletonsComponents";
import { PersonIcon } from "../component/icons/PersonIcon";

const PersonalInformation = dynamic(
  () => import("@/app/Build/Cv/components/PersonalInformation"),
  { ssr: false, loading: () => <MainFormSkeleton /> }
);
const Skills = dynamic(() => import("@/app/Build/Cv/components/Skills"), {
  ssr: false,
  loading: () => <MainFormSkeleton />,
});
const Experience = dynamic(
  () => import("@/app/Build/Cv/components/Experience"),
  { ssr: false, loading: () => <MainFormSkeleton /> }
);
const Education = dynamic(() => import("@/app/Build/Cv/components/Education"), {
  ssr: false,
  loading: () => <MainFormSkeleton />,
});
const UploadCv = dynamic(
  () => import("@/app/Build/CoverLetter/components/UploadCv"),
  {
    ssr: false,
    loading: () => <MainFormSkeleton />,
  }
);
const JobDescription = dynamic(
  () => import("@/app/Build/CoverLetter/components/jobDescription"),
  {
    ssr: false,
    loading: () => <MainFormSkeleton />,
  }
);
const JobOptimizeDescription = dynamic(
  () => import("@/app/Build/OptimizeResume/components/JobOptimizeDescription"),
  {
    ssr: false,
    loading: () => <MainFormSkeleton />,
  }
);

const UploadOptimizeCv = dynamic(
  () => import("@/app/Build/OptimizeResume/components/UploadOptimizeCv"),
  {
    ssr: false,
    loading: () => <MainFormSkeleton />,
  }
);

class ResumeBuilder {
  constructor(type) {
    this.type = type;
    this.localStorageKey = `${type}CurrentStep`;
    this.steps = this.initSteps();
    this.store = this.initStore();
  }

  initSteps() {
    const stepsMap = {
      Cv: [
        {
          title: "Personal Info",
          content: <PersonalInformation type="Cv" />,
          Icon: PersonIcon,
        },
        { title: "Skills", content: <Skills />, Icon: SkillIcon },
        {
          title: "Work Experience",
          content: <Experience />,
          Icon: ExperienceIcon,
        },
        { title: "Education", content: <Education />, Icon: EducationIcon },
      ],
      CoverLetter: [
        {
          title: "Personal Info",
          content: <PersonalInformation type="CoverLetter" />,
          Icon: PersonIcon,
        },
        { title: "Resume", content: <UploadCv />, Icon: PersonIcon },
        {
          title: "Job Description",
          content: <JobDescription />,
          Icon: PersonIcon,
        },
      ],
      optimizeResume: [
        { title: "Resume", content: <UploadOptimizeCv />, Icon: PersonIcon },
        {
          title: "Job Description",
          content: <JobOptimizeDescription />,
          Icon: PersonIcon,
        },
      ],
    };
    return stepsMap[this.type];
  }

  initStore() {
    return create((set) => ({
      currentStep: Number(
        WINDOW.localStorage.getItem(this.localStorageKey || 0) || 0
      ),
      steps: this.steps,
      handleStepChangeForward: () =>
        set((state) => {
          const newStep = state.currentStep + 1;
          if (newStep < state.steps.length) {
            WINDOW.localStorage.setItem(this.localStorageKey, newStep);
            return { currentStep: newStep };
          }
          return state;
        }),
      handleStepChangeBack: () =>
        set((state) => {
          const newStep = state.currentStep - 1;
          if (newStep >= 0) {
            WINDOW.localStorage.setItem(this.localStorageKey, newStep);
            return { currentStep: newStep };
          }
          scroll(0, 0);
          return state;
        }),
    }));
  }
  updateStep(step = null) {
    this.store.setState((state) => {
      let newStep;

      if (step !== null && typeof step === "number") {
        newStep = Math.max(0, Math.min(step, state.steps.length - 1));
      } else {
        newStep = Math.min(state.currentStep + 1, state.steps.length - 1);
      }

      WINDOW.localStorage.setItem(this.localStorageKey, newStep);
      scroll(0, 0);
      return { currentStep: newStep };
    });
  }
}

const cvBuilder = new ResumeBuilder("Cv");
const coverLetterBuilder = new ResumeBuilder("CoverLetter");
const optimizeResume = new ResumeBuilder("optimizeResume");

export { cvBuilder, coverLetterBuilder, optimizeResume };
