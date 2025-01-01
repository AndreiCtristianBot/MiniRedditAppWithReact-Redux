import React, { useState } from 'react';
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
            alt="Reddit Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
            style={{'border': '1px solid black', 'border-radius': '10px'}}
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
        <ul className="navbar-nav bg-dark">
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
              <li className="nav-item custom-li" key={item.path} style={{'color': 'black'}}>
                <Link className="nav-link text-white" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

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
        </div>
      </div>
    </nav>
  );
}







