import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser: any = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/auth/register/email`, //백엔드 api url
        body
      );

      return response.data;
    } catch (error) {
      // console.log(response);
      return thunkAPI.rejectWithValue(error.message);
    } //rejectWithValue에 string 을 넣어주면    action의 Payload(state에 전달하는 값)가 된다.
  }
);

export const loginUser: any = createAsyncThunk(
  "user/loginUser",
  async (encoded, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://52.78.34.195:3333/auth/login/email", //백엔드 api url
        {},
        {
          headers: {
            authorization: "Basic " + encoded,
          },
        }
      );

      return response.data;
    } catch (error) {
      //console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
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

      return response.data.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/user/userData" //백엔드 api url
      );

      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginOutUser = createAsyncThunk(
  "user/loginOutUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/user/userData" //백엔드 api url
      );

      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const porfileChange = createAsyncThunk(
  "user/porfileChange",
  async (body, thunkAPI) => {
    try {
      //console.log(body);
      const response = await axiosInstance.patch(
        "/user/profileChange",
        body //백엔드 api url
      );

      console.log(response.data.data);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
