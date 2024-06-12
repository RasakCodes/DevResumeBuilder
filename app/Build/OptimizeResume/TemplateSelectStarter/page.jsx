"use server";
import React from "react";
import TemplateSelectStarter from ".";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/lib/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <TemplateSelectStarter />
    </div>
  );
};

export default page;
