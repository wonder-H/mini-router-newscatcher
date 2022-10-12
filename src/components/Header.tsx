import React from 'react';

function Header() {
  return (
    <header>
      <span>MiniNews</span>
      <nav>
        <a href="/best">Best | </a>
        <a href="/news">News | </a>
        <a href="/ask">Ask | </a>
        <a href="/jobs">Jobs</a>
      </nav>
    </header>
  );
}

export default Header;
