import { atom, selector, selectorFamily } from 'recoil';
import { insApi, getMoreLists, getLists, getItemDetail } from './utils/api';

export const routePathState = atom({ key: 'routePathState', default: '/main' });
export const listsIdState = atom({ key: 'listsIdState', default: null });

export const routePathSelector = selector({
  key: 'routePathSelector',
  get: ({ get }) => get(routePathState),
  set: ({ set }, newValue) => set(routePathState, newValue),
});

export const contentSelector = selectorFamily({
  key: 'content',
  get:
    (content: string) =>
    async ({ get }) => {
      const res = await getLists.get(content);
      if (res.error) {
        throw res.error;
      }
      console.log(res);
      return res;
    },
});

// TODO Pagenation에 맞춰 API요청 작업할 것
export const pageSelector = selectorFamily({
  key: 'page',
  get: (page: number) => async (get) => {
    const res = await getMoreLists.get(page);
    return res;
  },
});

// TODO id에 맞춰 detail페이지에 데이터 가져올 것
export const listIdSelector = selectorFamily({
  key: 'listId',
  get:
    (id: number) =>
    async ({ get }) => {
      if (id) {
        const res = await getItemDetail.get(id);
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        return res;
      }
    },
});
