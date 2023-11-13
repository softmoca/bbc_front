import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const getBoardPosts = createAsyncThunk(
  "post/getBoardPosts",
  async (path, thunkAPI) => {
    try {
      const response = await axiosInstance.get("post/getBoardPost");

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dormitoryPost = createAsyncThunk(
  "post/dormitoryPost",
  async (_, thunkAPI) => {
    try {
      console.log(path);
      const response = await axiosInstance.get(
        "/post/dormitory" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bimaPost = createAsyncThunk(
  "post/bimaPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/bima" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bokjiPost = createAsyncThunk(
  "post/bokjiPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/bokji" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const centerLibraryPost = createAsyncThunk(
  "post/centerLibraryPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/centerLibrary" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const chambitPost = createAsyncThunk(
  "post/chatbitPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/chambit" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const theaterPost = createAsyncThunk(
  "post/theaterPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/theater" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const hanulPost = createAsyncThunk(
  "post/hanulPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/hanul" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saebitPost = createAsyncThunk(
  "post/saebitPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/saebit" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const hwadoPost = createAsyncThunk(
  "post/hwadoPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/hwado" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const okuiPost = createAsyncThunk(
  "post/okuiPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/okui" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const nuriPost = createAsyncThunk(
  "post/nuriPost",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/post/nuri" //백엔드 api url
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
