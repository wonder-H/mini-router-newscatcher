import React, { useState, useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listIdSelector } from '../state';
import styled from 'styled-components';
import { insApi } from '../utils/api';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2em;
  box-sizing: border-box;
  border: 2px solid rgba(190, 189, 255, 0.6);
  border-radius: 10px;
  outline: none;
  font-size: 13px;
  color: #444;
  background: #ffffff;
  resize: vertical;
  box-shadow: 0px 5px 10px 0px rgba(115, 158, 179, 0.2);
  margin: 25px 0;
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: rgba(73, 83, 93, 0.6);
    border-bottom: solid 1px rgba(143, 150, 156, 0.6);
    padding-bottom: 15px;

    :hover {
      text-decoration: underline;
      color: rgba(0, 120, 240, 0.6);
    }
  }
  p {
    margin-left: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    color: rgba(32, 53, 74, 0.6);
  }
  span {
    margin-left: 5px;
    color: rgba(158, 120, 77, 0.6);
    border-left: solid 2px rgba(210, 197, 152, 0.6);
    padding-left: 5px;
    padding-bottom: 2px;
  }
`;

function NewsListItem({ list }) {
  // NOTE useSetRecoilState로 id변경/관리 고민 필요
  const [listId, setListId] = useState(null);
  const [listData, setListData] = useState(null);

  const setId = (id) => {
    setListId(id);
  };

  useEffect(() => {
    async function fetchData(id) {
      const newData = await insApi.get(`/item/${id}.json`);
      setListData(newData.data);
    }
    if (listId) {
      fetchData(listId);
    }
  }, [listId]);

  return (
    <StyledDiv>
      <h2>
        <a href="#" onClick={() => setId(list.id)}>
          {list.title}
        </a>
      </h2>
      <p>
        {list.time_ago} , by {list.user}
      </p>
      <span>{list.comments_count} comments</span>

      {/* listData 확인 */}
      {listData && (
        <p>
          {listData.id}
          {listData.title}
        </p>
      )}
    </StyledDiv>
  );
}

export default NewsListItem;
