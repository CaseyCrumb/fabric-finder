import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    console.log('useEffect IndexPage');
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
    <h1>Blog</h1>
    posts: {}
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}