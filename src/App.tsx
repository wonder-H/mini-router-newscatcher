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
    </div>
  );
}

export default App;
