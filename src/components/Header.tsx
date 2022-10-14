import React from 'react';
import { useRecoilState } from 'recoil';
import { routePathState } from '../state';

function Header() {
  const [routePath, setRoutePath] = useRecoilState(routePathState);

  const pathLists = [
    { path: '/news', text: 'News ' },
    { path: '/ask', text: 'Ask ' },
    { path: '/jobs', text: 'Jobs' },
  ];

  const routePathHandler = (e, path: string) => {
    e.preventDefault();
    location.hash = path;
    setRoutePath(path);
  };

  return (
    <header>
      <h3>Today's MiniNews</h3>
      <nav>
        {pathLists.map((list) => (
          <a href={list.path} onClick={(e) => routePathHandler(e, `${list.path}`)} key={list.text}>
            {list.text}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
