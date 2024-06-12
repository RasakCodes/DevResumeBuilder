import React from "react";
import DashboardPage from ".";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/lib/auth";
import ResumeOptionsTabs from "./components/ResumeOptionsTabs";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return "Invalid Authentication";
  return (
    <div>
      <DashboardPage user={session} />
      <ResumeOptionsTabs />
    </div>
  );
};

export default page;
