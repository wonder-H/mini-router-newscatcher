import React from 'react';
import { listsIdSelector } from '../state';
import { useRecoilValue } from 'recoil';

function AskPage() {
  const lists = useRecoilValue(listsIdSelector);

  return (
    <div>
      <h2>AskPage</h2>
      {lists}
    </div>
  );
}

export default AskPage;
