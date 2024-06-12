import React from "react";
import { useJobDesc } from "../../hooks/useJobDesc";
import GenericFormInputs from "@/shared/GenericFormInput";
import { Form } from "@/components/ui/form";
import ButtonComp from "@/shared/Button";
import AnimateLoader from "@/app/Build/shared/AnimateLoader";

const JobDescription = () => {
  const {
    jobDescriptionFields,
    form,
    onSubmit,
    isLoading,
    isGeneratingCoverLetter,
  } = useJobDesc();
  if (isGeneratingCoverLetter) {
    return <AnimateLoader />;
  }
  return (
    <Form {...form} className="w-full">
      <form onSubmit={form?.handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-semibold mb-4">Job Description</h1>
        <div className="grid grid-cols-2 gap-4 w-full">
          {jobDescriptionFields?.map(
            (input, i) =>
              input.type !== "TEXTAREA" && (
                <GenericFormInputs key={i} {...input} form={form} />
              )
          )}
        </div>
        <div className="mt-3">
          {jobDescriptionFields?.map(
            (input, i) =>
              input.type === "TEXTAREA" && (
                <GenericFormInputs
                  key={`textarea-${i}`}
                  {...input}
                  form={form}
                  className="w-[100vw]"
                />
              )
          )}
        </div>
        <div className="flex justify-end items-end mt-5">
          <ButtonComp
            disabled={isLoading}
            text={isLoading ? "Submitting.." : "Submit"}
          />
        </div>
      </form>
    </Form>
  );
};

export default JobDescription;
