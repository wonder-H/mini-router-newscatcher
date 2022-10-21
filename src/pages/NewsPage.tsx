import { useRecoilValue } from 'recoil';
import { contentSelector } from '../state';
import styled from 'styled-components';
import NewsLists from '../components/NewsLists';

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  width: 80%;
  height: 90%;
`;

function NewsPage() {
  const lists = useRecoilValue(contentSelector('news'));

  return (
    <StyledDiv>
      <NewsLists lists={lists} />
    </StyledDiv>
  );
}

export default NewsPage;
