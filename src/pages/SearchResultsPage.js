import React from 'react';
import { useSelector } from 'react-redux';
import PostList from '../components/PostList';

export default function SearchResultsPage() {
  const { filteredPosts } = useSelector((state) => state.reddit);

  return (
    <div>
      <h1>Search Results</h1>
      {filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} />
      ) : (
        <p>No matching posts found.</p>
      )}
    </div>
  );
}
