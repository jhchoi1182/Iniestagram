"use client";

import PostListCard from "./PostListCard";
import GridSpinner from "./GridSpinner";
import usePosts from "@/hooks/usePosts";

export default function PostList() {
  const { posts, isLoading } = usePosts();

  return (
    <section>
      {isLoading && (
        <div className="text-center mt-32">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
