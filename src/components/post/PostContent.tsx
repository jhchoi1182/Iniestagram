import { parseDate } from "@/util/date";
import { Comment, SimplePost } from "@/model/post";
import ToggleButton from "../ui/button/ToggleButton";
import { BookmarkFillIcon, BookmarkIcon, HeartFillIcon, HeartIcon } from "../ui/icons";
import usePosts from "@/hooks/usePosts";
import useBookmark from "@/hooks/useBookmark";
import CommentForm from "./CommentForm";

type PostContentProps = {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (comment: Comment) => void;
};

export default function PostContent({ post, children, onComment }: PostContentProps) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useBookmark();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };
  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };
  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className="flex justify-between my-2 px-4">
        <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${likes?.length > 1 ? "likes" : "like"}`}</p>
        {children}
        <p className="text-xs text-neutral-500 uppercase my-2">{parseDate(createdAt)}</p>
      </div>
      <CommentForm onPostComment={handleComment} />
    </>
  );
}
