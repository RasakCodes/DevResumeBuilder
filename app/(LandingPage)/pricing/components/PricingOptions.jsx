import React from "react";

const PricingOptions = () => {
  return (
    <div className="">
      <div>
        <div className="flex flex-col justify-start  mb-16">
          <h5 className="text-sm font-semibold text-gray-600 uppercase">
            Affordable
          </h5>
          <h1 className="text-5xl font-bold mt-2">Pricing Options</h1>
          <p className="text-lg text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className=" p-8 mr-4">
            <ul className="space-y-6">
              <li>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <p>Choose the plan that best suits your needs and budget.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <p>Feature 1: Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <p>Feature 2: consectetur adipiscing elit.</p>
              </li>
            </ul>
          </div>
          <div className="w-1/2 border bg-white p-8 shadow-lg">
            <div className="flex items-center justify-between border-b mb-6">
              <div className=" pb-6">
                <h2 className="text-2xl font-semibold">Basic Plan</h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="text-5xl font-bold ">
                <span className="text-gray-600">$</span>19
                <span className="text-gray-600 text-2xl">/mo</span>
              </div>
            </div>
            <div className="border-b pb-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Includes:</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-4 mb-8">
                {Array.from({ length: 10 }, (_, i) => (
                  <li key={i} className="flex items-center">
                    {/* <span className="material-icons text-green-500 mr-2">
                      check_circle
                    </span> */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.29289L12 4.70711V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.60355C13 4.40464 12.921 4.21388 12.7803 4.07322L9.85355 1.14645C9.75979 1.05268 9.63261 1 9.5 1H3.5ZM5.25 7C4.97386 7 4.75 7.22386 4.75 7.5C4.75 7.77614 4.97386 8 5.25 8H9.75C10.0261 8 10.25 7.77614 10.25 7.5C10.25 7.22386 10.0261 7 9.75 7H5.25Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Feature {i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors w-full">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;
