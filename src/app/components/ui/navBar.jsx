import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav p-3 bg-dark nav-light">
      <li className="nav-item text-light">
        <Link className="nav-link" to="/">
          Today
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/habits">
          Habits
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
