import React from 'react';
import { listsIdSelector } from '../state';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  width: 80%;
  height: 90vh;

  div {
    width: 100%;
    max-width: 100%;
    height: 200px;
    padding: 2em;
    box-sizing: border-box;
    border: 2px solid rgba(233, 196, 178, 0.6);
    border-radius: 10px;
    outline: none;
    font-size: 13px;
    color: #444;
    background: #ffffff;
    resize: vertical;
    box-shadow: 0px 5px 20px 0px rgba(126, 99, 99, 0.2);
  }
`;

function AskPage() {
  const lists = useRecoilValue(listsIdSelector);

  return (
    <StyledDiv>
      {/* {lists} */}
      <div>
        <h2>AskPage</h2>
      </div>
    </StyledDiv>
  );
}

export default AskPage;
