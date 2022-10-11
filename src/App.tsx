import './App.css';
import { useEffect } from 'react';
import { insApi } from './utils/api';

function App() {
  const newsListsId = [];
  const newsLists = [];

  async function getNewsLists() {
    try {
      const res = await insApi.get('/topstories.json');
      if (res.statusText !== 'OK') {
        throw new Error('Could not fetch data :-/ ');
      }
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getNewsItems() {
    for (let i = 0; i < 10; i++) {
      await insApi.get(`/item/${newsListsId[i]}.json`).then((res) => newsLists.push(res.data));
    }
    console.log(newsLists);
  }

  useEffect(() => {
    getNewsLists().then((res) => {
      res.forEach((id: number) => {
        newsListsId.push(id);
      });
      getNewsItems();
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
