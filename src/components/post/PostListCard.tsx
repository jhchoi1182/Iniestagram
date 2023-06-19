import { SimplePost } from "@/model/post";
import Image from "next/image";
import Profile from "../ui/Profile";
import CommentForm from "./CommentForm";
import PostContent from "./PostContent";

type PostListCardProps = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority }: PostListCardProps) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Profile image={userImage} size="medium" highlight />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <PostContent likes={likes} username={username} text={text} createdAt={createdAt} />
      <CommentForm />
    </article>
  );
}
