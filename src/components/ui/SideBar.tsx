import { User } from "@/model/user";
import Profile from "./Profile";

type SideBarProps = {
  user: User;
};
export default function SideBar({ user: { name, username, image } }: SideBarProps) {
  return (
    <>
      <div className="flex items-center">
        {image && <Profile image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About · Help · Press · API · Jobs · Privacy · Terms · Location · Language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">@Copyright INIESTAGRAM from jihyeon</p>
    </>
  );
}
