import React from "react";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const GoogleLogin = async () => {
  let session;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    console.error("Failed to retrieve session:", error);
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
};
