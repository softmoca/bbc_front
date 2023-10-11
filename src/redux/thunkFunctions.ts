import axiosInstance from "@/app/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser: any = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/user/signup`, //백엔드 api url
        body
      );

      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    } //rejectWithValue에 string 을 넣어주면    action의 Payload(state에 전달하는 값)가 된다.
  }
);

export const loginUser: any = createAsyncThunk(
  "user/loginUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/user/localSignIn", //백엔드 api url
        body
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    } //rejectWithValue에 string 을 넣어주면    action의 Payload(state에 전달하는 값)가 된다.
  }
);

export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/user" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerPost = createAsyncThunk(
  "post/registerPost",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/post/",
        body //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);