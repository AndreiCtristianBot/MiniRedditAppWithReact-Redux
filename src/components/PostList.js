import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likePost, dislikePost, toggleCommentsVisibility, fetchComments } from '../features/redditSlice';

export default function PostList({ posts }) {
  const dispatch = useDispatch();

  const handleToggleComments = (postId, commentsVisible) => {
    if (!commentsVisible) {
      dispatch(fetchComments(postId));
    }
    dispatch(toggleCommentsVisibility(postId));
  };

  return (
    <div className="row">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          handleToggleComments={handleToggleComments}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

function PostCard({ post, handleToggleComments, dispatch }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!imageLoaded) {
        setImageError(true);
      }
    }, 1000); // Timeout de 1 secundă pentru încărcare

    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <p
          className="text-dark font-italic"
          style={{ fontSize: '18px', textAlign: 'center', fontFamily: 'Tahoma' }}
        >
          <br />
          {post.author ? `Posted by: ${post.author}` : 'Unknown Author'}
        </p>
        <p className="text-muted text-center" style={{ marginTop: '-10px' }}>
          <small>Posted on: {new Date(post.created).toLocaleDateString()} at {new Date(post.created).toLocaleTimeString('en-US')}</small>
        </p>
        <hr />
        {!imageError ? (
          <img
            src={post.thumbnail.startsWith('http') ? post.thumbnail : '/placeholder.jpg'}
            className="card-img-top"
            alt={post.title}
            style={{ height: '500px', objectFit: 'cover', display: 'block' }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div></div>
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            <strong>Views:</strong> {post.views}
          </p>
          <Link to={`/post/${post.id}`} className="btn btn-primary">
            Read More
          </Link>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <button
              className={`btn ${
                post.userInteraction === 'like' ? 'btn-success' : 'btn-outline-success'
              }`}
              onClick={() => dispatch(likePost(post.id))}
            >
              👍 Like ({post.likes})
            </button>
            <button
              className={`btn ${
                post.userInteraction === 'dislike' ? 'btn-danger' : 'btn-outline-danger'
              }`}
              onClick={() => dispatch(dislikePost(post.id))}
            >
              👎 Dislike
            </button>
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-primary"
              style={{
                backgroundColor: post.commentsVisible ? '#f6f5f4' : '#eafdfb',
                color: post.commentsVisible ? '#000' : '#000',
                borderRadius: '0 2em 50px',
              }}
              onClick={() => handleToggleComments(post.id, post.commentsVisible)}
            >
              {post.commentsVisible ? '❌ Hide Comments' : '💬 Comments'}
            </button>
          </div>
          {post.commentsVisible && (
            <ul className="list-group mt-3">
              {post.comments.map((comment) => (
                <li key={comment.id} className="list-group-item">
                  <strong>{comment.author}:</strong> {comment.body}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}













