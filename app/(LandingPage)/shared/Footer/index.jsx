import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-4">
      <div className="max-w-[90%] mx-auto flex justify-between flex-wrap gap-7 pt-10">
        <div className="flex gap-y-3 flex-col">
          <p className="text-gray-600 text-sm mb-4">
            Connect with us for more information and follow our journey on
            social media to get the latest updates and tips!
          </p>

          <div>
            <h3 className="font-semibold mb-2">Contact:</h3>
            <p className="text-gray-600 text-sm">admin@devsresume.com</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <div>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900 mb-2 font-bold"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900 mb-2 font-bold"
            >
              Contact Us
            </Link>
            <Link
              href="/serviceEffortless 4-Step Process to Build Your Resume 
"
              className="block text-gray-700 hover:text-gray-900 font-bold"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t-2 mt-10 pt-4 flex flex-wrap-reverse justify-between max-w-[90%] mx-auto">
        <p className="text-sm text-center text-gray-600">
          @2024 Devs Resume. All rights reserved{" "}
        </p>
        <div className="md:flex justify-center items-center space-x-4 mt-2">
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
