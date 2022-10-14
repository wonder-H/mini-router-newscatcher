import './App.css';
import { Suspense } from 'react';
import Router from './Router';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading . . .</div>}>
        <Router></Router>
      </Suspense>
    </>
  );
}

export default App;
