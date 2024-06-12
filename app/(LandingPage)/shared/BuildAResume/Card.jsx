"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import PopUpAnimate from "@/shared/animate/PopUpAnimate";
import { Modal } from "@/shared/component/Modal";
import { Button } from "@/components/ui/button";
import ResumeOption from "@/shared/ResumeOptions";
import Link from "next/link";

const Card = ({ Icon, title, descrip, link, borderColor, iconBgColor }) => {
  const renderTriggerButton = () => (
    <Button className="!bg-transparent hover:!bg-transparent border-0 shadow-none text-black flex gap-x-2">
      Get Started
      <ArrowRightIcon />
    </Button>
  );

  return (
    <PopUpAnimate>
      <div
        style={{
          borderTopColor: borderColor,
          borderTop: `2px solid #${borderColor}`,
        }}
        className="max-w-sm bg-white dark:bg-gray-800 p-4 h-[350px] flex flex-col justify-between"
      >
        <div className="flex-grow space-y-3">
          <div
            style={{ backgroundColor: iconBgColor }}
            className={`w-[70px] h-[70px] flex justify-center items-center rounded-full`}
          >
            {Icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl xl:text-3xl">
            {title}
          </h3>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {descrip?.slice(0, 100)}
          </p>
        </div>
        {link === "Cv" ? (
          <div className="flex md:justify-start max-w-[80%]">
            <Modal
              classStyle={""}
              styling={{ width: "900px", padding: "50px" }}
              trigger={renderTriggerButton()}
            >
              <ResumeOption />
            </Modal>
          </div>
        ) : (
          <Link href={link} className="mt-4 block">
            {renderTriggerButton()}
          </Link>
        )}
      </div>
    </PopUpAnimate>
  );
};

export default Card;
