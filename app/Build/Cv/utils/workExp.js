import { InputEnum } from "@/shared/api/enums";

export const workExperienceFields = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Enter the company name",
    required: true,
    type: InputEnum.TEXT,
  },
  {
    label: "Job Title",
    name: "jobTitle",
    placeholder: "Enter your job title",
    required: true,
    type: InputEnum.TEXT,
  },
  {
    label: "Start Date",
    name: "startDate",
    placeholder: "Start Date",
    required: true,
    type: InputEnum.DATE,
  },
  {
    label: "End Date",
    name: "endDate",
    placeholder: "End Date",
    required: false,
    type: InputEnum.DATE,
  },
  //   {
  //     label: "Currently Working",
  //     name: "currentlyWorking",
  //     required: false,
  //     type: InputEnum.CHECKBOX,
  //   },
  {
    label: "Brief Description of Responsibilities",
    name: "responsibilities",
    placeholder: "Describe your responsibilities",
    required: true,
    type: InputEnum.TEXTAREA,
  },
  {
    label: "Achievements (Optional)",
    name: "achievements",
    placeholder: "List any achievements",
    required: false,
    type: InputEnum.TEXTAREA,
  },
];
