import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function PostDetails() {
  const { id } = useParams();
  const post = useSelector((state) => state.reddit.posts.find((p) => p.id === id));

  if (!post) {
    return <div className="alert alert-danger">Post not found!</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      {post.thumbnail.startsWith('http') && (
        <img src={post.thumbnail} alt={post.title} className="img-fluid mb-4" />
      )}
      <p>{post.about}</p>
      <a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
        View on Reddit
      </a>
    </div>
  );
}

