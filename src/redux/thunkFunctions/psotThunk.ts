import axiosInstance from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerPost: any = createAsyncThunk(
  "post/registerPost",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/post/", body);

      // headers를 일반 객체로 변환
      const headers: any = {};
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
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardPosts: any = createAsyncThunk(
  "post/getBoardPosts",
  async (boardId: string, thunkAPI) => {
    const queryBoardId = { where__board__i_like: boardId };
    // console.log(queryBoardId);
    try {
      const response = await axiosInstance.get("post/getBoardPost", {
        params: queryBoardId,
      });

      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async (postId: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`post/${postId}/one`);
      // console.log("ddd");
      // console.log(response.data);
      // console.log("ddd");
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
