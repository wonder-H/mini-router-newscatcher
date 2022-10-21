import React from 'react';
import NewsListItem from './NewsListItem';

function NewsLists({ lists }) {
  return (
    <>
      {lists.map((item) => (
        <NewsListItem key={item.id} list={item}>
          {item}
        </NewsListItem>
      ))}
    </>
  );
}

export default NewsLists;
