import axiosInstance from "@/app/utils/axios";
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
