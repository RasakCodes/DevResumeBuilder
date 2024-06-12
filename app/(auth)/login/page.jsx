import React from "react";
import Login from ".";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/lib/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const page = async () => {
  const callbackurl = cookies().get("callbackurl");
  console.log(callbackurl, "callbackurl");
  const session = await getServerSession(authOptions);

  if (session?.email) redirect(callbackurl?.value || "/");
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
