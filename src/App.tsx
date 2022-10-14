import { Suspense } from 'react';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<div>Loading . . .</div>}>
        <Router></Router>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
