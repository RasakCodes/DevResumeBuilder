import HtmlContent from "@/shared/HtmlContent";
import React from "react";

const TemplateCv1 = ({ data }) => {
  return (
    <div className="bg-white p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          {data?.firstName} {data?.lastName}
        </h1>
        <div className="text-sm space-x-4">
          <span>{data?.email}</span>
          <span>|</span>
          <span>{data?.linkedin}</span>
          <span>|</span>
          <span>{data?.jobTitle}</span>
        </div>
      </div>
      {data?.summary && (
        <div className="border-t-2 border-b-2 border-black my-6 py-4">
          <h2 className="text-2xl font-bold text-center">
            Professional Summary
          </h2>
          <HtmlContent content={data?.summary} />
        </div>
      )}
      {data?.experience && (
        <div className="my-6">
          <h2 className="text-2xl font-bold border-b-2 pb-4 border-black">
            Experience
          </h2>
          {data?.experience.map((exp, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-bold text-lg">
                {exp?.jobTitle} | {exp?.companyName} | {exp?.startDate} -{" "}
                {exp?.currentlyWorking ? "Current" : exp?.endDate}
              </h3>
              <HtmlContent content={exp?.responsibilities} />
            </div>
          ))}
        </div>
      )}
      {data?.skills && (
        <div className="my-6">
          <h2 className="text-2xl font-bold border-b-2 pb-4 border-black">
            Core Qualifications
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm mt-3">
            {data?.skills
              .filter((skill) => skill.selected)
              .map((skill, index) => (
                <div key={index}>
                  <ul className="list-disc list-inside">
                    <li>{skill.label}</li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      )}
      {data?.education && (
        <div className="my-6">
          <h2 className="text-2xl font-bold border-b-2 pb-4 border-black">
            Education
          </h2>
          {data?.education.map((edu, index) => (
            <div key={index} className="text-sm mt-3">
              <p>{edu?.institutionName}</p>
              <p>
                {edu?.degreeName} in {edu?.fieldOfStudy} | {edu?.graduationYear}
              </p>
            </div>
          ))}
        </div>
      )}
      {data?.language && (
        <div className="my-6">
          <h2 className="text-2xl font-bold border-b-2 border-black">
            Languages
          </h2>
          {/* The languages section is commented out because the data? example does not include a languages array. If it did, you would map over it like the sections above. */}
          {/* <div className="grid grid-cols-3 gap-4 text-sm mt-3">
          {data?.languages.map((language, index) => (
            <p key={index}>{language}</p>
          ))}
        </div> */}
        </div>
      )}
    </div>
  );
};

export default TemplateCv1;
