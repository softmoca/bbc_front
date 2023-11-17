import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getBoardPosts,
  getPost,
  registerPost,
} from "../thunkFunctions/psotThunk";

const initialState = {
  postData: {},
  postDetailData: {},

  isLoading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerPost.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("글작성에 성공하였습니다.");
      })
      .addCase(registerPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(getBoardPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBoardPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload.data.data; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload.data.data);
      })
      .addCase(getBoardPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDetailData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      });
  },
});

export default postSlice.reducer;
