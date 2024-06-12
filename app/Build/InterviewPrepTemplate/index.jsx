"use client";
import React from "react";
import { useInterViewPrep } from "./hook/useInterViewPrep";
import { Form } from "@/components/ui/form";
import GenericFormInputs from "@/shared/GenericFormInput";
import ButtonComp from "@/shared/Button";
import { HeaderText } from "@/app/(LandingPage)/shared/Text/Header";
import HeadText from "./components/headText";

const InterviewPropTemplate = () => {
  const { personalInfo, form, onSubmit, isLoading } = useInterViewPrep();
  return (
    <div>
      <h1 className="text-red-500">Service on development</h1>

      <Form {...form} className="w-full">
        <form
          className="max-w-[60%] mx-auto"
          onSubmit={form?.handleSubmit(onSubmit)}
        >
          <HeaderText className={"mb-5"} text="Interview Preps" />
          {personalInfo?.map((input, index) => {
            if (input.type === "header") {
              return <HeadText key={index} title={input.title} />;
            } else {
              return (
                <div key={index}>
                  <GenericFormInputs {...input} form={form} className="my-3" />
                </div>
              );
            }
          })}

          <div className="flex justify-end items-end mt-5">
            <ButtonComp
              disabled={isLoading}
              text={isLoading ? "Submitting.." : "Submit"}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InterviewPropTemplate;
