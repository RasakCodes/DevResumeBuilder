"use client";
import React from "react";
import Link from "next/link";
import { ImgComp } from "@/shared/ImgComp";
import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";

const DashboardPage = ({ user, resumes }) => {
  // if (!user) return "";

  const handleLogout = async () => {
    // Clear cookies
    deleteCookie("token");
    deleteCookie("userID");

    // Sign out from NextAuth
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="container mx-auto px-4 py-8  rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {user.firstName} {user.lastName}
          </h1>
          <p className="text-lg text-gray-700">{user.email}</p>
        </div>
        <ImgComp
          src={user.image}
          alt={user.firstName + " " + user.lastName}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Resumes</h2>
        <ul>
          {resumes &&
            resumes.map((resume) => (
              <li key={resume.id} className="py-2">
                <div>
                  <Link
                    href={`/resume/${resume.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {resume.title}
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <div>
          <Link
            href="/services"
            className="bg-[#F9E547] text-black px-4 py-2 rounded"
          >
            Create New Resume
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
