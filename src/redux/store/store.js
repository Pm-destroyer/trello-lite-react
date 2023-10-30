import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { dataSlice } from '../slices/dataSlice';

const rootReducer = combineReducers({
  data: dataSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
