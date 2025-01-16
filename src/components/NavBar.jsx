import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("검색어:", query);
    // 검색 로직 추가 또는 페이지 이동
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-gray-800 text-white">
      {/* 로고 */}
      <Link to="/" className="text-lg font-bold">
        🎬🎬무븨🍿🍿
      </Link>

      {/* 검색 창 */}
      <form className="flex items-center flex-grow justify-center max-w-md" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="찾을 영화 제목을 입력하세요..."
          className="flex-grow max-w-sm border rounded-l-md px-3 py-2 text-gray-800"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
          🔍
        </button>
      </form>

      {/* 로그인 & 회원가입 버튼 */}
      <div className="flex space-x-4">
        <Link to="/login" className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
          로그인
        </Link>
        <Link to="/signup" className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
          회원가입
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

