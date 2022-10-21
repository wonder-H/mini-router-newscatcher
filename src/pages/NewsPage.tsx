import { useRecoilValue } from 'recoil';
import { contentSelector } from '../state';
import styled from 'styled-components';
import NewsLists from '../components/NewsLists';

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  width: 80%;
  height: 90vh;
`;

function NewsPage() {
  const lists = useRecoilValue(contentSelector('news'));

  return (
    <StyledDiv>
      {lists.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.user}</p>
          <p>{item.time}</p>
        </div>
      ))}
      <NewsLists />
    </StyledDiv>
  );
}

export default NewsPage;
