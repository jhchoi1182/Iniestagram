import { AiOutlineHeart } from 'react-icons/ai';
import { ClassNameProps } from "./BookmarkIcon";

export default function HeartIcon({ className }: ClassNameProps) {
  return <AiOutlineHeart className={className || 'w-7 h-7'} />;
}
