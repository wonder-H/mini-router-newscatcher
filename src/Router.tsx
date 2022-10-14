import { routePathState } from './state';
import { useRecoilValue } from 'recoil';

import MainPage from './pages/MainPage';
import AskPage from './pages/AskPage';
import JobsPage from './pages/JobsPage';
import NewsPage from './pages/NewsPage';

function Router() {
  const routePath = useRecoilValue(routePathState);
  let page = <MainPage />;

  switch (routePath) {
    case '/news':
      page = <NewsPage />;
      break;
    case '/ask':
      page = <AskPage />;
      break;
    case '/jobs':
      page = <JobsPage />;
      break;
    default:
      page = <MainPage />;
  }

  return page;
}

export default Router;
