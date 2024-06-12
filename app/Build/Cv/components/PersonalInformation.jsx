"use client";
import { Form } from "@/components/ui/form";
import React from "react";
import GenericFormInputs from "@/shared/GenericFormInput";
import ButtonComp from "../shared/Button";
import { usePersonalInfo } from "../hooks/usePersonalInfo";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const PersonalInformation = ({ type }) => {
  const { form, onSubmit, personalInfo, isLoading, summary, setsummary } =
    usePersonalInfo(type);
  return (
    <div>
      <Form {...form} className="w-full">
        <form onSubmit={form?.handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold leading-7 text-accent mb-3">
            Personal Information
          </h2>
          <div className="grid grid-cols-2 gap-4 w-full ">
            {personalInfo?.map((input, i) => {
              return (
                input.name != "summary" && (
                  <GenericFormInputs key={i} {...input} form={form} />
                )
              );
            })}
          </div>
          <div>
            {personalInfo?.map((input, i) => {
              if (input.name === "summary")
                return (
                  <div className="mt-7">
                    <p className="text-gray-700 dark:text-slate-50">
                      Description (optional)
                    </p>
                    <ReactQuill
                      theme="snow"
                      value={summary}
                      onChange={setsummary}
                      style={{ height: "100px" }}
                      className="w-full "
                    />
                  </div>
                );
              {
                (" ");
              }

              // <GenericFormInputs key={i} {...input} form={form} />;
            })}
          </div>
          <ButtonComp
            disabled={isLoading}
            text={isLoading ? "loading.." : "Next"}
            className="mt-10"
          />
        </form>
      </Form>
    </div>
  );
};

export default PersonalInformation;
