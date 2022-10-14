import { useRecoilValue } from 'recoil';
import { listsIdSelector } from '../state';

function JobsPage() {
  const lists = useRecoilValue(listsIdSelector);

  return (
    <div>
      <h2>JobsPage</h2>
      {lists}
    </div>
  );
}

export default JobsPage;
