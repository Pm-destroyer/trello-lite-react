import { actions as dataActions } from '../actionCreators/dataSlice';
import { store } from '../store';

const { dispatch } = store;

const setReduxState = (action, type, payload) => {
  switch (action) {
    case 'data':
      dispatch(dataActions[type](payload));
      break;
  }
};

export { setReduxState };
