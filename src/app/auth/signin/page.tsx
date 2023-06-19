import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import Signin from "@/components/Signin";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function signPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return (
    <div className="flex justify-center mt-24">
      <Signin providers={providers} />
    </div>
  );
}
