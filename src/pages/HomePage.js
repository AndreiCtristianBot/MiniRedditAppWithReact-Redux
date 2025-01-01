<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

export default function HomePage({ posts, isLoading, error }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Log pentru debugging
  console.log({ posts, isLoading, error });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!posts || posts.length === 0) return <div>No posts available.</div>;

  const totalPosts = posts.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />
      <PostList posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}





>>>>>>> fcd7c4a (added major stuff)
