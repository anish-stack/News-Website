import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';  // Custom CSS file for additional styling

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <NavLink className="navbar-brand custom-navbar-brand" to="/">NewsApp</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link custom-nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-nav-link" to="/create-news">Create News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-nav-link" to="/all-news">All News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-nav-link" to="/manage-news">Manage News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-nav-link" to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
