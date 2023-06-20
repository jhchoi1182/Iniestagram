import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import userSWR from "swr";
import PostContent from "../post/PostContent";
import CommentForm from "../post/CommentForm";
import Profile from "../ui/Profile";
import PostUserProfile from "../ui/PostUserProfile";

type DetailPostProps = {
  post: SimplePost;
};
export default function DetailPost({ post }: DetailPostProps) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image className="object-cover" src={image} alt={`photo by ${username}`} priority fill sizes="650px" />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserProfile image={userImage} username={username} />
        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(({ image, username: commentUsername, comment }, index) => (
              <li key={index} className="flex items-center mb-1">
                <Profile image={image} size="small" highlight={commentUsername === username} />
                <div className="ml-2">
                  <span className="font-bold mr-1">{commentUsername}</span>
                  <span>{comment}</span>
                </div>
              </li>
            ))}
        </ul>
        <PostContent likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
}
