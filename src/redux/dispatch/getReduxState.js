import { store } from '../store';

const getReduxState = (slice, key) => {
  const state = store.getState();
  return state[slice][key];
};

export { getReduxState };
