import React, { useEffect, useState } from 'react';

import { insApi } from '../utils/api';

function NewsPage() {
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

  return (
    <div>
      <h2>NewsPage</h2>

      {newsLists.map((list) => (
        <div key={list.id}>
          <p>id: {list.id}</p>
          <p>title: {list.title}</p>
          <p>time: {list.time}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
