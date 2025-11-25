import React from "react";
import PostCard from "./PostCard";

function PostList({ posts, onSelect }) {
  return (
    <div>
      <h2>All Blogs</h2>
      <div style={{ display: "grid", gap: "20px" }}>
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onSelect={onSelect} 
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
