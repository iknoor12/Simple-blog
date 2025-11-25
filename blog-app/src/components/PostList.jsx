import React from "react";
import PostCard from "./PostCard";

function PostList({ posts, onSelect }) {
  return (
    <div>
      <div  className="posts-grid">
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
