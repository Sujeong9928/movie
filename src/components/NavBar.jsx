import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Movie
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">회원가입</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
