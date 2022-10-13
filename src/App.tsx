import './App.css';
import { createContext, useEffect, useState, useContext } from 'react';
import { insApi } from './utils/api';
import NewsLists from './components/NewsLists';
import MainPage from './pages/MainPage';
import AskPage from './pages/AskPage';
import JobsPage from './pages/JobsPage';
import BestPage from './pages/BestPage';
import NewsPage from './pages/NewsPage';

import Header from './components/Header';
function App() {
  const [newsListsId, setNewsListsId] = useState(null);
  const [newsLists, setNewsLists] = useState([]);

  // 응답 데이터 ==
  /* by: string
  descendants: number
  id: number
  kids: array
  score: number
  time: number
  title: string
  type: string
  url: string */

  async function getNewsListsId() {
    try {
      const res = await insApi.get('/topstories.json');
      if (res.statusText !== 'OK') {
        throw new Error('Could not fetch data :-/ ');
      }
      const arr = [];
      // const arr = res.data.map((id: number) => id);
      // 20개만 받아오도록 설정
      for (let i = 0; i < 10; i++) {
        arr.push(res.data[i]);
      }
      setNewsListsId(arr);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!newsListsId) {
      getNewsListsId();
    } else {
      newsListsId.forEach(async (id) => {
        let { data } = await insApi.get(`/item/${id}.json`);
        setNewsLists((newsLists) => [...newsLists, data]);
      });
    }
  }, [newsListsId]);

  const RouterContext = createContext({
    routePath: '',
    changePath: () => null,
  });

  const routeHandler = (e, to) => {
    const { changePath } = useContext(routerContext);
    e.preventDefault();
    changePath(to);
  };

  const Router = ({ to, children }) => {
    const [routePath, setRoutePath] = useState(location.pathname);
    const contextValue = {
      routePath,
      changePath: setRoutePath,
    };

    if (routePath === '/best') {
      return (
        <RouterContext.Provider value={contextValue}>
          <BestPage to={to} onClick={(e) => routeHandler(e, to)}>
            {children}
          </BestPage>
        </RouterContext.Provider>
      );
    } else if (routePath === '/news') {
      return (
        <NewsPage to={to} onClick={(e) => routeHandler(e, to)}>
          {children}
        </NewsPage>
      );
    } else if (routePath === '/ask') {
      return (
        <AskPage to={to} onClick={(e) => routeHandler(e, to)}>
          {children}
        </AskPage>
      );
    } else if (routePath === '/jobs') {
      return (
        <JobsPage to={to} onClick={(e) => routeHandler(e, to)}>
          {children}
        </JobsPage>
      );
    } else {
      return (
        <MainPage to={to} onClick={(e) => routeHandler(e, to)}>
          {children}
        </MainPage>
      );
    }
  };
  const { routePath } = useContext(RouterContext);

  return (
    <div className="App">
      <Header />
      <Router>{routePath === '/news' && <NewsPage />}</Router>
      {/* <NewsLists /> */}

      {/* {newsLists.map((list) => (
        <div key={list.id}>
          <p>id: {list.id}</p>
          <p>title: {list.title}</p>
          <p>time: {list.time}</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
