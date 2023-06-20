import Profile from "./Profile";

type PostUserProfileProps = {
  image: string;
  username: string;
};
export default function PostUserProfile({ image, username }: PostUserProfileProps) {
  return (
    <div className="flex items-center p-2">
      <Profile image={image} size="medium" highlight />
      <span className="text-gray-900 font-bold ml-2">{username}</span>
    </div>
  );
}
