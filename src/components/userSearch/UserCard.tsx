import { ProfileUser } from "@/model/user";
import Link from "next/link";
import Profile from "../ui/Profile";

type UserCardProps = {
  user: ProfileUser;
};
export default function UserCard({ user: { name, username, image, following, followers } }: UserCardProps) {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50 "
    >
      <Profile image={image} />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
