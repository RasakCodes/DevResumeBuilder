const degreeOptions = [
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
  "Certificate",
  "Diploma",
];

function EducationComp({ formData, handleInputChange, errors, index }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor={`institution-name-${index}`}
            className="block text-gray-700 text-sm font-normal mb-2"
          >
            Institution Name*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`institution-name-${index}`}
            name="institutionName"
            type="text"
            placeholder="Enter institution name"
            onChange={(e) => handleInputChange(index, e)}
            value={formData.institutionName}
          />
          {errors?.institutionName && (
            <p className="text-red-500 text-xs italic">
              {errors?.institutionName}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor={`degree-name-${index}`}
            className="block text-gray-700 text-sm font-normal mb-2"
          >
            Degree Name*
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`degree-name-${index}`}
            name="degreeName"
            onChange={(e) => handleInputChange(index, e)}
            value={formData.degreeName}
          >
            <option value="">Select degree</option>
            {degreeOptions.map((degree, idx) => (
              <option key={idx} value={degree}>
                {degree}
              </option>
            ))}
          </select>
          {errors?.degreeName && (
            <p className="text-red-500 text-xs italic">{errors?.degreeName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor={`field-of-study-${index}`}
            className="block text-gray-700 text-sm font-normal mb-2"
          >
            Field of Study*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`field-of-study-${index}`}
            name="fieldOfStudy"
            type="text"
            placeholder="Enter field of study"
            onChange={(e) => handleInputChange(index, e)}
            value={formData.fieldOfStudy}
          />
          {errors?.fieldOfStudy && (
            <p className="text-red-500 text-xs italic">
              {errors?.fieldOfStudy}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="">
            <label
              htmlFor={`graduation-year-${index}`}
              className="block text-gray-700 text-sm font-normal mb-2"
            >
              Graduation Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`graduation-year-${index}`}
              name="graduationYear"
              type="date"
              onChange={(e) => handleInputChange(index, e)}
              value={formData.graduationYear}
              disabled={formData.currentlyStudying}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EducationComp;
