const PaginateBoxMobile = ({ text, currentStep, steps, incrementSteps }) => {
  return (
    <div className="flex justify-center items-center gap-x-3 my-3">
      {/* circle */}
      {steps?.map((step, index) => (
        <div
          style={{
            backgroundColor: index <= currentStep ? "#F9E547" : "#F4F4F4",
          }}
          key={step.title + index}
          onClick={() => incrementSteps(index)}
          className="w-3 h-3 bg-slate-300 rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default PaginateBoxMobile;
