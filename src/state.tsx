import { atom, selector } from 'recoil';

export const routePathState = atom({ key: 'routePathState', default: '/main' });

export const routePathSelector = selector({
  key: 'routePathSelector',
  get: ({ get }) => get(routePathState),
  set: ({ set }, newValue) => set(routePathState, newValue),
});
