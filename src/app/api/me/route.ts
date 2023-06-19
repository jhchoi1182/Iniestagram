import { Session } from "@/app/page";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserByUsername } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    return new Response("Authentication Error", { status: 401 });
  }
  const user = session?.user;

  return getUserByUsername(user.username).then((data) => NextResponse.json(data));
}
