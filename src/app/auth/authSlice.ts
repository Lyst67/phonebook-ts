import { createSlice } from "@reduxjs/toolkit";
import {
  logInThunk,
  logOutThunk,
  refreshThunk,
  registerThunk,
} from "./auth-operations";

export interface User {
  name: null | string
  email: null | string
}

export interface AuthState {
  user: User
  token: null | string 
  isLoading: boolean
  isLogedIn: boolean
  isRefreshing: boolean
}

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLogedIn: false,
  isRefreshing: false,
} 

const authSlise = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLogedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLogedIn = true;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = false;
        state.isLogedIn = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isLogedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlise.reducer;
