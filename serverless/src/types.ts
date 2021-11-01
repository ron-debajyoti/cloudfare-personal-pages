interface Profile {
  username: string;
  userid: number;
}

interface Post {
  id: string;
  title: string;
  username: string;
  content: string;
}

export { Profile, Post };
