import HtmlContent from "@/shared/HtmlContent";
import React from "react";

const TemplateCv2 = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg">
      <div className="flex justify-between">
        <div className="text-4xl font-bold">
          {data?.firstName} {data?.lastName}
        </div>
        <div className="text-right">
          <div>{data?.linkedin}</div>
          <div>{data?.email}</div>
          <div>{data?.jobTitle}</div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 my-4"></div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          {data?.summary && (
            <div>
              {" "}
              <div className="font-bold text-xl mb-3">PROFESSIONAL SUMMARY</div>
              <HtmlContent content={data?.summary} />
            </div>
          )}

          {data?.experience && data?.experience?.length && (
            <div>
              <div className="font-bold text-xl mt-6 mb-3">EXPERIENCE</div>
              {data?.experience.map((exp, index) => (
                <div key={index}>
                  <div className="font-bold">
                    {exp.companyName} - {exp?.jobTitle}
                  </div>
                  <div className="text-gray-600">
                    {exp?.startDate} -{" "}
                    {exp?.currentlyWorking ? "Current" : exp?.endDate}
                  </div>
                  {/* <p>{exp?.responsibilities}</p> */}
                  <HtmlContent content={exp?.responsibilities} />
                </div>
              ))}
            </div>
          )}
          {/* <div className="font-bold text-xl mt-6 mb-3">LANGUAGES</div> */}
          {/* Languages would be an array in your data? structure */}
          {/* <ul className="list-disc ml-5">
            {data?.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul> */}
        </div>
        {data?.skills && data?.education?.length > 0 && (
          <div>
            <div className="font-bold text-xl mb-3">CORE QUALIFICATIONS</div>
            <ul className="list-disc ml-5">
              {data?.skills.map((skill, index) => (
                <li key={index}>{skill?.label}</li>
              ))}
            </ul>
            <div className="font-bold text-xl mt-6 mb-3">EDUCATION</div>
            {data?.education.map((edu, index) => (
              <div key={index}>
                <div className="font-bold">{edu?.graduationYear}</div>
                <div>{edu?.institutionName}</div>
                <div>
                  {edu?.degreeName} in {edu?.fieldOfStudy}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateCv2;
