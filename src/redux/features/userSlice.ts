import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  authUser,
  loginUser,
  registerPost,
  registerUser,
} from "../thunkFunctions";

const initialState = {
  userData: {
    id: "",
    email: "",
    name: "",
    role: 0, //0은 일반 유저
    image: "",
  },
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("회원가입을 성공했습니다락다락");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        state.isAuth = true; // 로그인이 되었음.

        localStorage.setItem("accessToken", action.payload.data.accessJwtToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        console.log(action.payload);
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.userData = initialState.userData; // 유저 데이터 초기화
        state.isAuth = false;
        localStorage.removeItem("accessToken"); // 만료가 된경우
      })
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
      });
  },
});

export default userSlice.reducer;
