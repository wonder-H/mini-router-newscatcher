import { useRecoilValue } from 'recoil';
import { listsIdSelector } from '../state';
import styled from 'styled-components';

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  width: 80%;
  height: 90vh;
  display: grid;
  grid-auto-columns: 1fr;
  gap: 1em;
  grid-template-areas:
    'one one two two two'
    'one one two two two'
    'three three three three three'
    'three three three three three';

  div.grid-item {
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(55, 54, 54, 0.3);
    :hover {
      border: 1px solid #cbcbcb;
      transition: all 0.2s;
    }
  }

  .grid-item:nth-child(1) {
    grid-area: one;
  }

  .grid-item:nth-child(2) {
    grid-area: two;
  }

  .grid-item:nth-child(3) {
    grid-area: three;
  }
`;

function JobsPage() {
  const lists = useRecoilValue(listsIdSelector);

  return (
    <StyledDiv className="grid-container">
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
      {/* lists */}
    </StyledDiv>
  );
}

export default JobsPage;
