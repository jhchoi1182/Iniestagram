import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { GET } from "../../api/auth/[...nextauth]/route";
import Signin from "@/components/Signin";

export default async function signPage() {
  const session = await getServerSession(GET);
  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return <Signin providers={providers} />;
}
