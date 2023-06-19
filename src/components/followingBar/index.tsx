"use client";

import { DetailUser } from "@/model/user";
import Link from "next/link";
import useSWR from "swr";
import Profile from "../ui/Profile";
import { PropagateLoader } from "react-spinners";
import ScrollableBar from "./ScrollableBar";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  const following = data?.following;

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!following || following.length === 0) && <p>{`You don't have following`}</p>
      )}
      {following && following.length > 0 && (
        <ScrollableBar>
          {following.map(({ image, username }) => (
            <Link key={username} className="flex flex-col items-center w-20" href={`/user/${username}`}>
              <Profile image={image} highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">{username}</p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
