import React from 'react';
import { useRecoilState } from 'recoil';
import { routePathState } from '../state';

function Header() {
  const [routePath, setRoutePath] = useRecoilState(routePathState);

  const routePathHandler = (e, path: string) => {
    e.preventDefault();
    setRoutePath(path);
  };

  return (
    <header>
      <span>MiniNews</span>
      {routePath}
      <nav>
        <a href="/best" onClick={(e) => routePathHandler(e, '/best')}>
          Best |
        </a>
        <a href="/news" onClick={(e) => routePathHandler(e, '/news')}>
          News |
        </a>
        <a href="/ask" onClick={(e) => routePathHandler(e, '/ask')}>
          Ask |
        </a>
        <a href="/jobs" onClick={(e) => routePathHandler(e, '/jobs')}>
          Jobs
        </a>
      </nav>
    </header>
  );
}

export default Header;
