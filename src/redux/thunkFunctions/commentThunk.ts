import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "post/getComments",
  async (postId: string, thunkAPI) => {
    try {
      // console.log(postId);
      const response = await axiosInstance.get(`post/${postId}/comment`);

      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
