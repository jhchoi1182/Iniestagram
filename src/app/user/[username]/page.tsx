import UserPosts from "@/components/userPage/UserPosts";
import UserProfile from "@/components/userPage/UserProfile";
import { getUserForProfile } from "@/service/user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type UserPageParams = { params: { username: string } };

const getUser = cache(async (username: string) => getUserForProfile(username));

export async function generateMetadata({ params: { username } }: UserPageParams): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username}) · Iniestagram Photos`,
    description: `${user?.name}'s all Iniestagram posts`,
  };
}

export default async function UserPage({ params: { username } }: UserPageParams) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}
