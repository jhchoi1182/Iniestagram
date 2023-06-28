"use client";

import { Comment, SimplePost } from "@/model/post";
import Image from "next/image";
import Profile from "../ui/Profile";
import PostContent from "./PostContent";
import { useState } from "react";
import ModalPortal from "../detailModal/ModalPortal";
import DetailModal from "../detailModal/DetailModal";
import DetailPost from "../detailModal/DetailPost";
import usePosts from "@/hooks/usePosts";

type PostListCardProps = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority }: PostListCardProps) {
  const { userImage, username, image, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComment } = usePosts();

  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };

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
        onClick={() => setOpenModal(true)}
      />
      <PostContent post={post} onComment={handlePostComment}>
        <p>
          <span className="font-bold mr-1">{username}</span>
          {text}
        </p>
        {comments > 1 && (
          <button
            className="font-bold my-2 text-sky-500"
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </PostContent>
      {openModal && (
        <ModalPortal>
          <DetailModal onClose={() => setOpenModal(false)}>
            <DetailPost post={post} />
          </DetailModal>
        </ModalPortal>
      )}
    </article>
  );
}
