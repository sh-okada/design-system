import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton } from "./_components";
import { EcTypography } from "@/components";

const getREADME = async (username: string) => {
  console.log(username);
  const gitUrl = `https://api.github.com/repos/${username}/design-system/contents/README.md`;
  const res = await fetch(gitUrl, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${username}`,
    },
  });

  const readme = await res.json();

  console.log(readme);
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user);
  getREADME(user ? (user.accessToken as string) : "");

  return user ? (
    <EcTypography>{user.accessToken}</EcTypography>
  ) : (
    <LoginButton />
  );
}
