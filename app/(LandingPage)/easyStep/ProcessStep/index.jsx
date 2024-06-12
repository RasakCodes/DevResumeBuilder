import { AIGeneration } from "@/shared/component/icons/AIGeneration";
import { Checkout } from "@/shared/component/icons/Checkout";
import { EasySteps } from "@/shared/component/icons/EasySteps";
import { Editing } from "@/shared/component/icons/Editing";

const steps = [
  {
    name: "Form",
    description: "Fill out simple and user-friendly forms",
    icon: EasySteps,
  },
  {
    name: "Resume building",
    description: "Our advanced AI generates your professional resume",
    icon: AIGeneration,
  },
  {
    name: "Edit",
    description: "Make final edits to fit your needs.",
    icon: Editing,
  },
  {
    name: "Download",
    description: "Download your resume with a single click!",
    icon: Checkout,
  },
];

const ProcessStep = ({ step, isLast }) => {
  const Icon = step.icon;
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="p-3 bg-yellow-100 rounded-full">
          {Icon && <Icon className="w-6 h-6 text-yellow-600" />}
        </div>
        {!isLast && (
          <div className="border-l-2 border-dashed border-gray-300 md:h-22 h-16 lg:h-28"></div>
        )}
      </div>
      <div>
        <h4 className="text-lg font-semibold">{step.name}</h4>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
};

export default function ProcessSteps() {
  return (
    <div className="bg-white py-8 -">
      <div className="max-w-md mx-auto">
        {steps.map((step, stepIdx) => (
          <ProcessStep
            key={stepIdx}
            step={step}
            isLast={stepIdx === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
