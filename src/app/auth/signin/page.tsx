import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { Signin } from "@/components/ui/button";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signup or Login to Iniestagram",
};

type SignPageParams = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({ searchParams: { callbackUrl } }: SignPageParams) {
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
