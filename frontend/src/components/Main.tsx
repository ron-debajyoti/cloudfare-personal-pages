/**
 * Component for the main page in React
 */

import React, { useState, useEffect } from "react";
import { getPosts } from "./utils";
import PostWidget from "./PostWidget";
import "../styles/Main.css";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };

    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="page-main">
      <h2 className="header-main"> Social Cloud </h2>
      <div className="posts-widgets-list">
        {posts.map((post) => (
          <PostWidget {...post} />
        ))}
      </div>
    </div>
  );
};

export default Main;
