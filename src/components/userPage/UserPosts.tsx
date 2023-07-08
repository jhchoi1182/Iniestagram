"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";
import { BookmarkIcon, HeartIcon, PostIcon } from "../ui/icons";
import PostGrid from "./PostGrid";
import { CacheKeysContext } from "@/context/CacheKeysContext";

type UserPostsProps = {
  user: ProfileUser;
};
const tabs = [
  { type: "posts", icon: <PostIcon />, title: "posts" },
  { type: "saved", icon: <BookmarkIcon className="w-3 h-3" />, title: "saved" },
  { type: "liked", icon: <HeartIcon className="w-3 h-3" />, title: "liked" },
];
export default function UserPosts({ user: { username } }: UserPostsProps) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon, title }) => (
          <li
            className={`mx-12 p-4 cursor-pointer border-black ${type === query && "font-bold border-t"}`}
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className="scale-150 md:scale-100" aria-title={title}>
              {icon}
            </button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <CacheKeysContext.Provider value={{ postsKey: `/api/users/${username}/${query}` }}>
        <PostGrid />
      </CacheKeysContext.Provider>
    </section>
  );
}
