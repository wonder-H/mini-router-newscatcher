import { useRecoilValue } from 'recoil';
import { listsIdSelector } from '../state';
import styled from 'styled-components';
import NewsLists from '../components/NewsLists';

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  width: 80%;
  height: 90vh;
`;

function NewsPage() {
  const lists = useRecoilValue(listsIdSelector);

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

  return (
    <StyledDiv>
      <NewsLists />
    </StyledDiv>
  );
}

export default NewsPage;
