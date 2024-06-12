import { ImgComp } from "@/shared/ImgComp";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthNav = ({ setToggleMenu }) => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.email ? (
        <Link
          href={"/dashboard"}
          // className="py-2 px-4  font-medium text-[#A1A29A] rounded hover:text-black transition duration-300 w-full md:w-auto text-center md:text-start  items-center gap-x-2 hidden lg:flex"
          className="text-center md:text-start  items-center gap-x-2 hidden lg:flex"
        >
          <span className="hover:text-slate-400 font-bold">
            {session?.firstName}
          </span>
          <ImgComp
            className={"w-[30px] h-[30px] rounded-full"}
            src={session?.image || ""}
            alt={session?.firstName}
          />
        </Link>
      ) : (
        <div className=" flex md:flex-row flex-col items-center space-x-3 gap-3 md:gap-0 ">
          {/* <Link
          href="#"
          className="py-2 px-4  font-medium text-[#A1A29A] rounded hover:text-black transition duration-300 border w-full md:w-auto text-center md:text-start"
        >
          Sign In
        </Link> */}
          <Link
            onClick={() => setToggleMenu(false)}
            href="/login"
            className="py-2 px-4  font-medium text-black bg-[#F9E547] rounded hover:bg-[#d8c74a] transition duration-300 w-full md:w-auto text-center md:text-start"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
