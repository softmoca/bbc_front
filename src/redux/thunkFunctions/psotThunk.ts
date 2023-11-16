import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerPost = createAsyncThunk(
  "post/registerPost",
  async (body, thunkAPI) => {
    //console.log(body);
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
  async (boardId: string, thunkAPI) => {
    const queryBoardId = { where__board__i_like: boardId };

    try {
      const response = await axiosInstance.get("post/getBoardPost", {
        params: queryBoardId,
      });

      //console.log(response.data.data.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async (postId: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`post/${postId}`);

      //console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
