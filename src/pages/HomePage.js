import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/redditSlice';
import PostList from '../components/PostList';

export default function HomePage() {
  const { posts, isLoading, error } = useSelector((state) => state.reddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts('r/all'));
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <PostList posts={posts} />
    </div>
  );
}
