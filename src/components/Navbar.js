import React, { useState } from 'react';
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
            alt="Reddit Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
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
          <ul className="navbar-nav">
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
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}






