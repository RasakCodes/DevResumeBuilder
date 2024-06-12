import React from "react";
import { useJobDescription } from "../../hooks/useJobDescription";
import GenericFormInputs from "@/shared/GenericFormInput";
import ButtonComp from "@/shared/Button";
import { Form } from "@/components/ui/form";
import IsLoading from "@/shared/loading/IsLoading";

const JobOptimizeDescription = () => {
  const { jobDescriptionFields, onSubmit, form, isLoading, isGeneratingCv } =
    useJobDescription();

  if (isGeneratingCv) {
    return <IsLoading />;
  }
  return (
    <div>
      <Form {...form} className="w-full">
        <form
          onSubmit={form?.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3 mt-5"
        >
          <GenericFormInputs {...jobDescriptionFields} form={form} />
          <ButtonComp
            disabled={isLoading}
            text={isLoading ? "Submitting.." : "Submit"}
          />
        </form>
      </Form>
    </div>
  );
};

export default JobOptimizeDescription;
