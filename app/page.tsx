import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton } from "./_components";
import { EcTypography } from "@/components";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return user ? <EcTypography>{user.name}さん</EcTypography> : <LoginButton />;
}
