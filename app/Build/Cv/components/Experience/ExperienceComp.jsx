import ReactQuill from "react-quill";

function ExperienceComp({ formData, handleInputChange, errors, index }) {
  const handleQuillChange = (index, fieldName, content) => {
    // Get the current field value from formData using the fieldName
    const currentContent = formData[fieldName] || "";

    // Check if the new content is different from the current content
    if (currentContent !== content) {
      const event = {
        target: {
          name: fieldName,
          value: content,
        },
      };
      handleInputChange(index, event);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor={`company-name-${index}`}
            className="block text-gray-700 text-sm font-normal mb-2"
          >
            Company name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`company-name-${index}`}
            name="companyName"
            type="text"
            placeholder="Deloitte"
            onChange={(e) => handleInputChange(index, e)}
            value={formData?.companyName}
          />
          {errors?.companyName && (
            <p className="text-red-500 text-xs italic">{errors?.companyName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-normal mb-2"
            htmlFor="job-title"
          >
            Job title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="job-title"
            name="jobTitle"
            type="text"
            placeholder="Sharepoint Developer"
            onChange={(e) => handleInputChange(index, e)}
            value={formData.jobTitle}
          />
          {errors?.jobTitle && (
            <p className="text-red-500 text-xs italic">{errors?.jobTitle}</p>
          )}
        </div>

        <div className="">
          <label
            className="block text-gray-700 text-sm font-normal mb-2"
            htmlFor={`start-date-${index}`}
          >
            Start date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`start-date`}
            name="startDate"
            type="date"
            onChange={(e) => handleInputChange(index, e)}
            value={formData.startDate}
          />
          {errors?.startDate && (
            <p className="text-red-500 text-xs italic">{errors?.startDate}</p>
          )}
        </div>
        <div className="flex flex-col">
          {
            <div className="">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="end-date"
              >
                End date
              </label>
              <input
                disabled={formData.currentlyWorking}
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="end-date"
                name="endDate"
                type="date"
                onChange={(e) => handleInputChange(index, e)}
                value={formData.endDate}
              />
            </div>
          }
          {/* {/ current working /} */}
          <div className="mt-2">
            <label
              htmlFor={`currently-working-${index}`}
              className="inline-flex items-center"
            >
              <input
                id={`currently-working-${index}`}
                name="currentlyWorking"
                checked={formData.currentlyWorking || false}
                type="checkbox"
                onChange={(e) => handleInputChange(index, e)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <span className="ml-2">Currently Working</span>
            </label>
          </div>
        </div>
      </div>

      <div className="my-4">
        <label
          className="block text-gray-700 text-sm font-normal mb-2"
          htmlFor={`responsibilities-${index}`}
        >
          Brief description of responsibilities
        </label>

        <ReactQuill
          id="responsibilities"
          theme="snow"
          style={{ height: "100px" }}
          value={formData.responsibilities || ""}
          onChange={(content) =>
            handleQuillChange(index, "responsibilities", content)
          }
          placeholder="Describe your responsibilities"
          className="overflow-y-scroll"
        />

        {errors?.responsibilities && (
          <p className="text-red-500 text-xs italic">
            {errors?.responsibilities}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-normal mb-2"
          htmlFor="achievements"
        >
          Achievements (optional)
        </label>

        <ReactQuill
          id="achievements"
          theme="snow"
          style={{ height: "100px" }}
          value={formData.achievements || ""}
          onChange={(content) =>
            handleQuillChange(index, "achievements", content)
          }
          placeholder="List any achievements"
          className="mt-4 overflow-y-scroll"
        />
      </div>
    </div>
  );
}

export default ExperienceComp;
