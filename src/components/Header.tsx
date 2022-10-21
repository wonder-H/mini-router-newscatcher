import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { routePathState } from '../state';

import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  margin: auto;
  background-color: #e8e8e8;
  box-shadow: 2px 2px 5px rgba(78, 77, 77, 0.3);

  div {
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    width: 82%;
    height: 100%;

    span {
      margin-left: 20px;
      font-size: 18px;
      font-weight: 900;
      color: #707070;
      :hover {
        color: #8a9aac;
      }
    }
    nav {
      width: 220px;
      height: 100%;
      margin: 10px;
      font-weight: 900;
      color: #707070;
      display: flex;
      justify-content: space-between;
      a {
        font-size: 18px;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 15px;
        :hover {
          color: #82a5cf;
          text-decoration: underline;
        }
      }
    }
  }
`;

function Header() {
  const [routePath, setRoutePath] = useRecoilState(routePathState);

  // NOTE 동적 라우팅 처리할 곳 결정 필요(Router or Header)
  useEffect(() => {
    console.log(routePath);
  }, [routePath]);

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
    <StyledHeader>
      <div>
        <span>Today's MiniNews</span>
        <nav>
          {pathLists.map((list) => (
            <a
              href={list.path}
              onClick={(e) => routePathHandler(e, `${list.path}`)}
              key={list.text}
            >
              {list.text}
            </a>
          ))}
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;
