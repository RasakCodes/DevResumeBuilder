"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { DottedIcon } from "@/shared/component/icons/DottedIcon";
import { useHandleStepChangeFunc } from "@/app/Build/Cv/hooks/usehandleStepChangeFunc";
import { builderInstance } from "@/app/util/builderInstance";

const GoBackToResumeEdit = ({ cvId, type }) => {
  const { incrementSteps } = useHandleStepChangeFunc(type);
  const builderInstanceFunc = builderInstance(type);
  const router = useRouter();

  const { steps } = builderInstanceFunc.store((state) => ({
    steps: state.steps,
  }));

  function handleGoBackToEditing(index) {
    incrementSteps(index);
    router.push(`/Build/${type}/?id=${cvId}&type=Cv`);
  }
  return (
    <aside className=" p-5">
      <nav className="h-[50%] bg-white md:shadow p-10 flex gap-x-4 md:block">
        {steps?.map((item, i) => (
          <div key={i} onClick={() => handleGoBackToEditing(i)}>
            {" "}
            <NavItem text={item.title} Icon={item.Icon} />
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default GoBackToResumeEdit;

const NavItem = ({ text, Icon }) => {
  return (
    <div className="flex items-center  my-4 p-2 border border-[#A1A29A] shadow rounded-lg cursor-pointer gap-x-2 py-5">
      <DottedIcon className="w-10 h-10" />
      <Icon className="w-10 h-10" />
      <span className="hidden md:block font-semibold text-[#A1A29A] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};
