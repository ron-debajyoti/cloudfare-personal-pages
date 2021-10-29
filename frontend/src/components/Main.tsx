/**
 * Component for the main page in React
 */

import React, { useState, useEffect } from "react";
import { getPosts } from "./utils";

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
    <div>
      <h2> Social Cloud </h2>
      <div className="posts-widgets-list"></div>
    </div>
  );
};

export default Main;
