import React from "react";

const AdditionalSection = () => {
  let List = [
    "Interest",
    "Tools",
    "Languages",
    "Certificates",
    "Website",
    "Languages",
  ];
  return (
    <div>
      {List.map((item) => (
        <div className="flex items-center gap-2 my-2">
          <input
            id={item}
            name={item}
            type="checkbox"
            // checked={formData.currentlyStudying || false}
            // onChange={(e) => handleInputChange(index, e)}
            className="form-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset"
          />
          <span className="text-md">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default AdditionalSection;
