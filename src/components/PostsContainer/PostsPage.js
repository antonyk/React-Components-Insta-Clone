import React from "react";
import {useState} from 'react';

// Components
import Post from "./Post";
import "./Posts.css";

// Data
import dummyData from '../../dummy-data.js';

export default function PostsPage() {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
  {/* map through data here to return a Post and pass data as props to Post */}
  { posts.map(item => { return <Post post={item}/>}) }
    </div>
  )
}

