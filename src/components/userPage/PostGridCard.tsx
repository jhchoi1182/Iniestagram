import { SimplePost } from "@/model/post";
import Image from "next/image";
import { useState } from "react";
import ModalPortal from "../detailModal/ModalPortal";
import DetailModal from "../detailModal/DetailModal";
import DetailPost from "../detailModal/DetailPost";
import { signIn, useSession } from "next-auth/react";

type PostGridCardProps = {
  post: SimplePost;
  priority: boolean;
};
export default function PostGridCard({ post, priority = false }: PostGridCardProps) {
  const [openModal, setOpenModal] = useState(false);
  const { image, username } = post;
  const { data: session } = useSession();

  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };

  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPortal>
          <DetailModal onClose={() => setOpenModal(false)}>
            <DetailPost post={post} />
          </DetailModal>
        </ModalPortal>
      )}
    </div>
  );
}
