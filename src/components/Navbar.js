import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState(null);
  const [pressedLink, setPressedLink] = useState(null);

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = '#444'; // Culoare de fundal la hover
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = ''; // Resetăm fundalul
  };

  const handleMouseDown = (link) => {
    setPressedLink(link);
  };

  const handleMouseUp = () => {
    setPressedLink(null);
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const navLinkStyle = (link) => ({
    color: 'white',
    textShadow: '2px 2px 4px black',
    backgroundColor:
      pressedLink === link
        ? '#666' // Fundal mai deschis când este apăsat
        : activeLink === link
        ? '#555' // Fundal activ
        : '',
    padding: '8px',
    borderRadius: '4px',
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={navLinkStyle()}>
          <img
            src="/logo.png"
=======
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('newest'); // Default filter
  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    setFilterOption(selectedOption); // Doar actualizăm opțiunea selectată
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Declanșăm filtrarea doar la apăsarea pe Search
    onFilter({ searchTerm, filterOption });
    navigate('/');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onFilter({ searchTerm, filterOption });
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwcdBt_mA3muhMhD7VLmMROxGYkX2bApClLAs-TQmWt80f9MOXnMKMAcvGxjmKANc4Rc&usqp=CAU"
>>>>>>> fcd7c4a (added major stuff)
            alt="Reddit Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
<<<<<<< HEAD
=======
            style={{'border': '1px solid black', 'border-radius': '10px'}}
>>>>>>> fcd7c4a (added major stuff)
          />
          MiniReddit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
<<<<<<< HEAD
          <ul className="navbar-nav">
=======
        <ul className="navbar-nav bg-dark">
>>>>>>> fcd7c4a (added major stuff)
            {[
              { label: '🏛️ Politics', path: '/category/politics' },
              { label: '🖥️ Technology', path: '/category/technology' },
              { label: '👟 Sports', path: '/category/sports' },
              { label: '🎮 Gaming', path: '/category/gaming' },
              { label: '🎥 Movies', path: '/category/movies' },
              { label: '🤣 Funny', path: '/category/funny' },
              { label: '🖼️ Pics', path: '/category/pics' },
              { label: '🪄 LivestreamFail', path: '/category/livestreamfail' },
              { label: '❗️ NoStupidQuestions', path: '/category/nostupidquestions' },
              { label: '🛠️ Palworld', path: '/category/palworld' },
              { label: '🫤 Unexpected', path: '/category/unexpected' },
            ].map((item) => (
<<<<<<< HEAD
              <li className="nav-item" key={item.path}>
                <Link
                  className="nav-link"
                  to={item.path}
                  style={navLinkStyle(item.path)}
                  onClick={() => handleClick(item.path)}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onMouseDown={() => handleMouseDown(item.path)}
                  onMouseUp={handleMouseUp}
                >
=======
              <li className="nav-item custom-li" key={item.path} style={{'color': 'black'}}>
                <Link className="nav-link text-white" to={item.path}>
>>>>>>> fcd7c4a (added major stuff)
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
<<<<<<< HEAD
=======

          <div className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <select
              className="form-select me-2"
              value={filterOption}
              onChange={handleFilterChange} // Doar setăm valoarea
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="mostPopular">Most Popular</option>
              <option value="leastPopular">Least Popular</option>
              <option value="favorites">Favorites</option>
              <option value="nonFavorites">Non-favorites</option>
            </select>
            <button className="btn btn-primary" onClick={handleSearchClick}>
              Search
            </button>
          </div>
>>>>>>> fcd7c4a (added major stuff)
        </div>
      </div>
    </nav>
  );
}






<<<<<<< HEAD
=======





>>>>>>> fcd7c4a (added major stuff)
