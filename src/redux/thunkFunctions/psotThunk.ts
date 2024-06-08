import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerPost = createAsyncThunk(
  "post/registerPost",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/post/", body);

      // headers를 일반 객체로 변환
      const headers = {};
      for (const [key, value] of Object.entries(response.headers)) {
        headers[key] = value;
      }

      // 응답 객체를 명확히 직렬화 가능한 형태로 변환
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers, // 변환된 headers
        config: {
          url: response.config.url,
          method: response.config.method,
          data: response.config.data,
        },
        request: {
          responseURL: response.request.responseURL,
        },
      };
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

      console.log(response.data);
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
