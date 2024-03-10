import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from "../store";
import { User } from "./authSlice";

interface MyErrorType {
   message: string;
  description: string;
  code: number | undefined;
}

interface Register {
  name: string
  email: string
  password: string
}
type UserPayload = {
  user: User
  token: string
}

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";
const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk<UserPayload, Register, {rejectValue: MyErrorType}>(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", body);
      setToken(data.token);
      toast.success("Registration is successful!", { position: "top-right" });
      return data as UserPayload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyErrorType);
    }
  }
);

export const logInThunk = createAsyncThunk<UserPayload, Pick<Register, "email" | "password">, {rejectValue: MyErrorType}>(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", body);
      setToken(data.token);
      toast.success("Login is successful!", { position: "top-right" });
      return data as UserPayload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyErrorType);
    }
  }
);

export const refreshThunk = createAsyncThunk<User, undefined, {rejectValue: string | MyErrorType, state:  RootState}>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue("Error! There is no persistToken!");
    }
    try {
      setToken(persistToken);
      const { data } = await axios.get("/users/current");
      return data as User;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyErrorType);
    }
  }
);

export const logOutThunk = createAsyncThunk<undefined, undefined, {rejectValue: MyErrorType}>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      unsetToken();
      toast.success("Logout is successful!", { position: "top-right" });
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyErrorType);
    }
  }
);
