import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { User } from "@/model/user";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export type Session = {
  user: User;
};

export default async function HomePage() {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) return redirect("/auth/signin");
  const user = session?.user;

  return (
    <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4 ml-8">
        <SideBar user={user} />
      </div>
    </section>
  );
}
