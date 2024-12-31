import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../features/redditSlice';
import PostList from '../components/PostList';

export default function CategoryPage() {
  const { category } = useParams();
  const { posts, isLoading, error } = useSelector((state) => state.reddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(`r/${category}`));
  }, [dispatch, category]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <PostList posts={posts} />
    </div>
  );
}
