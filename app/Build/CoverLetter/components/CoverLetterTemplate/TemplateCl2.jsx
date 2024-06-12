import HtmlContent from "@/shared/HtmlContent";
import React from "react";

const TemplateCl2 = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-lg">{data.jobTitle}</p>
        </div>
        <div>
          <button className="text-gray-400 hover:text-gray-600">
            <i className="fas fa-print fa-lg"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="col-span-1">
          <h2 className="font-bold text-lg mb-3">Personal Info</h2>
          <p>
            <i className="fas fa-phone-alt mr-2"></i>Phone
          </p>
          <p className="mb-2">{data.phone}</p>
          <p>
            <i className="fas fa-envelope mr-2"></i>Email
          </p>
          <p>{data.email}</p>
        </div>
        <div className="col-span-2">
          <p>Dear Recuiter</p>
          {/* <pre style={{ whiteSpace: "pre-wrap", wordBreak: "keep-all" }}>
            {data.result}
          </pre> */}
          <HtmlContent
            className=" text-base leading-relaxed tracking-wide"
            content={data?.result}
          />
          <p>With best regards,</p>
          <p>
            {data.firstName} {data.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCl2;
