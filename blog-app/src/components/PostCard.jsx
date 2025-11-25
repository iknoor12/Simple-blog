import React from "react";

function PostCard({ post, onSelect }) {
  return (
    <div 
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      onClick={() => onSelect(post)}
    >
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 80)}...</p>
    </div>
  );
}

export default PostCard;
