import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100px;
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

  h2 {
    font-size: 14px;
    font-weight: 700;
  }
`;
function NewsListItem({ list }) {
  return (
    <StyledDiv>
      <h2>{list.title}</h2>
      <p>{list.user}</p>
      <p>{list.time_ago}</p>
      <p>comments {list.comments_count}</p>
    </StyledDiv>
  );
}

export default NewsListItem;
