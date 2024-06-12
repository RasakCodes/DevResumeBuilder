import React from "react";
import ButtonComp from "@/app/Build/Cv/shared/Button";
import { useSkills } from "../hooks/useSkills";
import SkillSelector from "@/shared/SkillSelector/SkillSelector";
import { skillsData } from "../utils/skillData";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import _ from "lodash";

const Skills = () => {
  const { onSubmit, isLoading } = useSkills();
  const { currentCv, isLoading: loading } = useGetCurrentUserResume();
  const jobTitle = currentCv?.message?.jobTitle;
  let data = skillsData[_.startCase(jobTitle)];
  console.log(data, 'data')
  return (
    <>
      <SkillSelector
        skills={data}
        savedData={currentCv?.message}
        loading={loading}
      />
      <div onClick={onSubmit}>
        <ButtonComp
          disabled={isLoading}
          text={isLoading ? "loading..." : "Next"}
        />
      </div>
    </>
  );
};

export default Skills;
