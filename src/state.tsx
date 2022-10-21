import { atom, selector, selectorFamily } from 'recoil';
import { insApi, getMoreLists, getLists } from './utils/api';

export const routePathState = atom({ key: 'routePathState', default: '/main' });
export const listsIdState = atom({ key: 'listsIdState', default: 'top' });

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
export const pageSelector = selectorFamily({
  key: 'page',
  get: (page: number) => async (get) => {
    const res = await getMoreLists.get(page);
    return res;
  },
});
