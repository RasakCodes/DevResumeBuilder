import React from "react";

const ComingSoon = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/828531/pexels-photo-828531.jpeg')",
      }}
    >
      <div className="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8 text-white">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-white tracking-wider font-bold font-serif mt-12 text-center">
            Coming Soon
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" title="Facebook">
                <svg
                  className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300"
                  fill="#faeb76"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 506.86 506.86"
                >
                  <path
                    fill="#faeb76"
                    d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <svg
                  className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300"
                  fill="#faeb76"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 333333 333333"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                    fill="#faeb76"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" title="LinkedIn">
                <svg
                  className="w-6 lg:w-8 h-6 lg:h-8 hover:scale-110 transition duration-300"
                  fill="#faeb76"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 333333 333333"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                    fill="#faeb76"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
