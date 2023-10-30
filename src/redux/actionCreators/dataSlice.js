import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    sidebarWidth: 60,
  },
  reducers: {
    setSidebarWidth(state, action) {
      state.width = action.paylod;
    },
  },
});

export const actions = dataSlice.actions;
export { dataSlice };
