import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDeatils";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="app-container" style={{ padding: "20px" }}>
      <h2>All Blogs</h2>
      {selectedPost ? (
        <PostDetails post={selectedPost} goBack={() => setSelectedPost(null)} />
      ) : (
        <PostList posts={posts} onSelect={(post) => setSelectedPost(post)} />
      )}
    </div>
  );
}

export default App;
