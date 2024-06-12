import HtmlContent from "@/shared/HtmlContent";
import React from "react";

const TemplateCl = ({ data }) => {
  return (
    <div className=" bg-white shadow-lg flex w-full ">
      <div className="flex justify-between bg-[#005080] px-5 py-5">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-white">
            {data?.lastName} {data?.firstName}
          </h1>
          <p className="text-white text-lg mt-1">{data?.jobTitle}</p>
          <div className="mt-4 relative">
            <h2 className="font-bold text-white text-lg bg-[#00406e] absolute">
              Personal Info
            </h2>
            {data?.phone && (
              <p className="text-white">
                <strong>Phone</strong>
                <br />
                {data?.phone}
              </p>
            )}
            {data?.email && (
              <p className="text-white">
                <strong>Email</strong>
                <br />
                {data?.email}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="px-5 py-5">
        {data?.companyName && (
          <div>
            {data?.date && <p className="text-black ">{data?.date}</p>}
            <div className=" mt-10">
              {data?.companyName && (
                <p className="text-black">{data?.companyName}</p>
              )}
              {/* <p className="text-black">Head of Recruitment</p>
              <p className="text-black">Refinance</p> */}
              {data.companyAddress && (
                <p className="text-black">{data?.companyAddress}</p>
              )}
              {data?.companyCity && (
                <p className="text-black">{data?.companyCity}</p>
              )}
            </div>
          </div>
        )}
        <p className="text-black">Dear Recuiter,</p>
        {data?.result && (
          // <pre style={{ whiteSpace: "pre-wrap", wordBreak: "keep-all" }}>
          //   {data?.result}
          // </pre>
          <HtmlContent
            className=" text-base leading-relaxed tracking-wide w-full"
            content={data?.result}
          />
        )}

        <p className="text-black mt-4">With best regards,</p>
        <p className="text-black mt-4">
          {" "}
          {data?.lastName} {data?.firstName}
        </p>
      </div>
    </div>
  );
};

export default TemplateCl;
