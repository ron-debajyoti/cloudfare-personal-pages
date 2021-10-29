interface Profile {
  username: string;
  userid: number;
}

interface Post {
  title: string;
  username: string;
  content: string;
}

export type { Profile, Post };
