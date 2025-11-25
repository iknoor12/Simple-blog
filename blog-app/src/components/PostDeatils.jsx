import React from "react";

function PostDetails({ post, goBack }) {
  return (
    <div className="post-details">
      <button className="back-btn" onClick={goBack} style={{ marginBottom: "20px" }}>
        ⬅ Back to Posts
      </button>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
