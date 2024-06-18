"use client";
import { EcButton } from "@/components";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return <EcButton onClick={() => signIn()}>ログイン</EcButton>;
};

export { LoginButton };
