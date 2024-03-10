import { RootState } from "../store";
export const selectIsLogedIn = (state: RootState) => state.auth.isLogedIn;
export const selectUserName = (state: RootState) => state.auth.user.name;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
