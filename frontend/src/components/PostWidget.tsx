import React from "react";
import "../styles/PostWidget.css";
import { Post } from "./types";

const PostWidget = (post: Post) => {
  const { id, title, username, content } = post;
  return (
    <div className="widget-post" id={id}>
      <h2 className="post-title">{title}</h2>
      <h5 className="post-username">By {username}</h5>
      <h4 className="post-content">{content}</h4>
    </div>
  );
};

export default PostWidget;
