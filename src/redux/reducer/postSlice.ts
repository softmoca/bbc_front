import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getBoardPosts,
  getPost,
  registerPost,
} from "../thunkFunctions/psotThunk";

const initialState = {
  postData: [
    {
      createdAt: "",
      id: "",
      board: {
        BoardTitle: "",
      },
    },
  ],
  postDetailData: {
    createdAt: "",
    author: {
      email: "",
      nickName: "",
    },
    images: [],
    board: {
      BoardTitle: "",
    },
  },

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
        toast.info("게시글을 작성 하였습니다 !");
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
        //console.log(action.payload.data);
        state.postData = action.payload.data; // 백엔드로 api 요청 한 후 return으로 받은 json
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
        // console.log(action.payload);
        state.postDetailData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
      })
      .addCase(getPost.rejected, (state: any, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      });
  },
});

export default postSlice.reducer;
