import { RiBookmarkLine } from 'react-icons/ri';

export type ClassNameProps = {
  className?: string;
};
export default function BookmarkIcon({ className }: ClassNameProps) {
  return <RiBookmarkLine className={className || 'w-6 h-6'} />;
}
