"use client";
import React from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { GithubIcon, Linkedin } from "lucide-react";

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#F9E542",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const Login = () => {
  //  const callbackurl = getCookie("next-auth.callback-url");
  // const { data: session } = useSession();

  // const router = useRouter();
  // if (session?.user) {
  //   router.push("/");
  // }

  return (
    <div className="flex flex-col gap-2 min-h-screen bg-gray-100 p-10 justify-center items-center">
      <motion.button
        className="flex border border-[#F9E547] items-center justify-center w-full bg-white rounded-lg shadow-md max-w-md px-6 py-3 text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => signIn("google")}
      >
        <svg
          className="mr-3 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="20px"
          height="20px"
        >
          <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z" />
        </svg>{" "}
        <span>Continue with Google</span>
      </motion.button>
      <motion.button
        className="flex border border-[#F9E547] items-center justify-center w-full bg-white rounded-lg shadow-md max-w-md px-6 py-3 text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => signIn("linkedin")}
      >
        <Linkedin className="w-6 h-6 mr-3 text-gray-600" />
        <span>Continue with Linkedin</span>
      </motion.button>
    </div>
  );
};

export default Login;
