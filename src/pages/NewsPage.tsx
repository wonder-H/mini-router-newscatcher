import { useRecoilValue } from 'recoil';
import { listsIdSelector } from '../state';

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
    <div>
      <h2>NewsPage</h2>

      {lists}
    </div>
  );
}

export default NewsPage;
