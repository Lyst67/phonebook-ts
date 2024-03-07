import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshThunk,
  registerThunk,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};
// const handleFulfilled = (state, { payload }) => {
//   state.token = payload.token;
//   state.user = payload.user;
// };

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogedIn = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlise.reducer;
