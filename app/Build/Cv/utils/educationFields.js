import { InputEnum } from "@/shared/api/enums";

export const educationFields = [
  {
    label: "School Name",
    name: "institutionName",
    placeholder: "Enter the school name",
    required: true,
    type: InputEnum.TEXT,
  },
  {
    label: "Degree",
    name: "degreeName",
    placeholder: "Enter your degree",
    required: true,
    type: InputEnum.TEXT,
  },
  {
    label: "Field of Study",
    name: "fieldOfStudy",
    placeholder: "Enter your field of study",
    required: false,
    type: InputEnum.TEXT,
  },
  {
    label: "Graduation Year",
    name: "graduationYear",
    placeholder: "Graduation Year",
    required: true,
    type: InputEnum.DATE,
  },
];
