export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
  id: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type HomeUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type SearchUser = User & {
  following: number;
  followers: number;
};

export type ProfileUser = SearchUser & {
  posts: number;
};
