import React from "react";
import HtmlContent from "@/shared/HtmlContent";

const TemplateCv6 = ({ data }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row">
        <div className="bg-gray-800 text-white p-8 flex-1 w-[40%] overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">
            {data?.lastName} {data?.firstName}
          </h1>
          <p className="text-xl mb-4">{data?.jobTitle}</p>
          <p className="mb-4">
            <i className="fas fa-envelope"></i> {data?.email}
          </p>
          <p className="mb-4">
            <i className="fas fa-phone"></i> {data?.number}
          </p>
          <p className="mb-4">
            <i className="fas fa-map-marker-alt"></i> {data?.address}
          </p>
          {/* <p className="mb-4">
            <i className="fas fa-globe"></i> onyedika.xyz
          </p> */}
          <p className="mb-4">
            <i className="fab fa-linkedin"></i> {data?.linkedin}
          </p>
          {/* <p>
            <i className="fab fa-github"></i> github.com/kasodon
          </p> */}
          {data?.summary && (
            <div>
              <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>
              <HtmlContent content={data?.summary} />
            </div>
          )}

          {data?.education && data?.education?.length > 0 && (
            <div>
              {data?.education && data?.education.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
                  {/* <h2 className="text-2xl font-bold mb-4">EDUCATION</h2> */}
                  {data?.education.map((edu) => (
                    <div key={edu._id}>
                      <p>{edu?.graduationYear}</p>
                      <p>
                        {edu?.degreeName} in {edu?.fieldOfStudy}
                      </p>
                      <p>{edu?.institutionName}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {data?.experience && data?.experience?.length > 0 && (
          <div className="p-8 flex-1">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            {data?.experience?.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold">
                  {exp?.jobTitle},{" "}
                  <span className="text-blue-600">{exp?.companyName}</span>
                </h3>
                <p className="text-gray-600">
                  {exp?.startDate} -{" "}
                  {exp?.currentlyWorking ? "Present" : exp?.endDate}
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: exp?.responsibilities }}
                />
                <div dangerouslySetInnerHTML={{ __html: exp?.achievements }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateCv6;
