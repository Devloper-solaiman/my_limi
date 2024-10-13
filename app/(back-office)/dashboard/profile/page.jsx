import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) return;
  const { user } = session;
  return (
    <div>
      <h2 className="text-center font-semibold mt-32">Welcome {user?.name} </h2> 
      <h1>{user?.email}</h1>
    </div>
  );
}