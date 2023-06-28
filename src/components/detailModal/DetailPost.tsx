import { SimplePost } from "@/model/post";
import Image from "next/image";
import PostContent from "../post/PostContent";
import Profile from "../ui/Profile";
import PostUserProfile from "../ui/PostUserProfile";
import usePost from "@/hooks/usepost";

type DetailPostProps = {
  post: SimplePost;
};
export default function DetailPost({ post }: DetailPostProps) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = usePost(id);
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
        <PostContent post={post} onComment={postComment} />
      </div>
    </section>
  );
}
