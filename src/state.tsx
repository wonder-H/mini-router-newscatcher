import { atom, selector, selectorFamily } from 'recoil';
import { insApi, getIdLists, getStoryLists } from './utils/api';

export const routePathState = atom({ key: 'routePathState', default: '/main' });
export const listsIdState = atom({ key: 'listsIdState', default: 'top' });

export const routePathSelector = selector({
  key: 'routePathSelector',
  get: ({ get }) => get(routePathState),
  set: ({ set }, newValue) => set(routePathState, newValue),
});

export const listsIdSelector = selector({
  key: 'listsId',
  get: async () => {
    const res = await getIdLists.get('top');
    return res;
  },
});
export const listsSelector = selector({
  key: 'lists',
  get: async () => {
    const res = await getStoryLists.get('');
    return res;
  },
});

// async (id: number) => {
//   listsId.forEach(async (id) => {
//     let { data } = await insApi.get(`/item/${id}.json`);
//   });
