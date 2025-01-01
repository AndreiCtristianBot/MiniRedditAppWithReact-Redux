import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import PostDetailsPage from './pages/PostDetailsPage';
import AboutPage from './pages/AboutPage';
import { fetchPosts } from './features/redditSlice';

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.reddit);
  const [filterOption, setFilterOption] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPosts('r/all'));
  }, [dispatch]);

  // Selector pentru a aplica filtrarea și sortarea direct pe `posts`
  const filteredPosts = useSelector((state) => {
    let filtered = [...state.reddit.posts];

    // Filtrare după termenul de căutare
    if (searchTerm) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sortare în funcție de opțiunea selectată
    switch (filterOption) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.created) - new Date(a.created));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.created) - new Date(b.created));
        break;
      case 'mostPopular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'leastPopular':
        filtered.sort((a, b) => a.views - b.views);
        break;
      case 'favorites':
        filtered = filtered
          .filter((post) => post.likes > 0)
          .sort((a, b) => b.likes - a.likes);
        break;
      case 'nonFavorites':
        filtered = filtered
          .filter((post) => post.likes >= 0)
          .sort((a, b) => a.likes - b.likes);
        break;
      default:
        break;
    }

    return filtered.slice(0, 3);
  });

  const handleFilter = ({ searchTerm, filterOption }) => {
    setSearchTerm(searchTerm);
    setFilterOption(filterOption);
  };

  return (
    <Router>
      <NavBar onFilter={handleFilter} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              posts={filteredPosts}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
