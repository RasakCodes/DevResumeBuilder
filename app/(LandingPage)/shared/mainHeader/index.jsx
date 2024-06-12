"use client";
import React, { useState } from "react";
import HambuggerButton from "./HambuggerButton";
import Link from "next/link";
import { NavListData } from "./data";
import MoreLink from "./MoreLink";
import AuthNav from "./AuthNav";
import { useSession } from "next-auth/react";
import { ImgComp } from "@/shared/ImgComp";

const MainHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <div className="mb-[90px]"></div>
      <nav className="fixed top-0 w-full bg-white z-[999] shadow">
        <div className="max-w-[90%] mx-auto py-1">
          <div className="flex mx-auto justify-between items-center ">
            <div className="flex items-center justify-between gap-16 ">
              <div>
                <Link
                  onClick={() => setToggleMenu(false)}
                  href="/"
                  className="flex gap-1 font-bold text-gray-700
                items-center"
                >
                  {/* <Logo /> */}
                  <ImgComp src={"/assets/logo.png"} className={"w-24 h-20"} />
                </Link>
              </div>
            </div>

            <div className="flex gap-6">
              <NavList classStyle="hidden lg:flex gap-8 items-center" />

              {/* user profile*/}
              <div className="py-2 px-4  font-medium text-[#A1A29A] rounded hover:text-black transition duration-300 w-full md:w-auto text-center md:text-start  items-center gap-x-2 flex lg:hidden">
                <span>{session?.firstName}</span>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <HambuggerButton />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <NavList
              classStyle="flex flex-col gap-8 font-bold tracking-wider"
              setToggleMenu={setToggleMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainHeader;

const NavList = ({ classStyle, setToggleMenu }) => {
  function handleClick() {
    setToggleMenu ? setToggleMenu(false) : {};
  }
  return (
    <div className={`${classStyle}`}>
      {NavListData.map((elem, i) => {
        if (elem === "More") {
          return <MoreLink key={i} />;
        }
        return (
          <Link
            key={i}
            className="hover:text-slate-400 font-bold text-lg"
            href={
              elem === "Blogs"
                ? `#${elem.toLowerCase()}`
                : `/${elem.toLowerCase()}`
            }
            onClick={handleClick}
          >
            {elem}
          </Link>
        );
      })}
      <AuthNav setToggleMenu={setToggleMenu} />
    </div>
  );
};
