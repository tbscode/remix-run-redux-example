import { configureStore } from "@reduxjs/toolkit";
import { createSelector, createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
      hello: "test",
      count: 1
    },
    reducers: {
      initialise: (state, action) => {
          state = action.payload;
      },
      increment: (state) => {
        state.count += 1;
      },
    },
});

export const { increment } = userDataSlice.actions;


export default configureStore({
  reducer: {
    userData: userDataSlice.reducer,
  },
});
