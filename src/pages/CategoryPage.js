<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> fcd7c4a (added major stuff)
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../features/redditSlice';
import PostList from '../components/PostList';
<<<<<<< HEAD
=======
import Pagination from '../components/Pagination'; // Importăm componenta Pagination
>>>>>>> fcd7c4a (added major stuff)

export default function CategoryPage() {
  const { category } = useParams();
  const { posts, isLoading, error } = useSelector((state) => state.reddit);
  const dispatch = useDispatch();

<<<<<<< HEAD
=======
  // State pentru paginare
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; 

>>>>>>> fcd7c4a (added major stuff)
  useEffect(() => {
    dispatch(fetchPosts(`r/${category}`));
  }, [dispatch, category]);

<<<<<<< HEAD
=======
  // Calculăm postările curente pentru pagină
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Schimbăm pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

>>>>>>> fcd7c4a (added major stuff)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
<<<<<<< HEAD
      <h2 className="mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <PostList posts={posts} />
=======
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <h2 className="mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <PostList posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
>>>>>>> fcd7c4a (added major stuff)
    </div>
  );
}
