import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("검색어:", query);
    // 검색 로직을 추가하거나 페이지 이동
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🎬🎬무븨🍿🍿
        </Link>
        {/* 검색 창 */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="찾을 영화 제목을 입력하세요.."
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-button">
            🔍
          </button>
        </form>
        {/* 로그인 & 회원가입 버튼 */}
        <div className="navbar-buttons">
          <Link to="/login" className="navbar-button login-button">
            로그인
          </Link>
          <Link to="/signup" className="navbar-button signup-button">
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
