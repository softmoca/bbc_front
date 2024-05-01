import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  authUser,
  getUserData,
  loginUser,
  porfileChange,
  registerUser,
} from "../thunkFunctions/userThunk";

const initialState = {
  userAuthData: {
    id: "",
    email: "",
    university: "",
    nickName: "",
  },
  userProfileData: {
    id: "",
    email: "",
    university: "",
    nickName: "",
    images: [],
    posts: [],
    postComments: [],
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
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userAuthData = action.payload;
        state.isAuth = true;
        localStorage.setItem("refreshToken", action.payload.refreshToken);
        localStorage.setItem("accessToken", action.payload.accessToken);
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
        state.userAuthData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        state.isAuth = true; // 로그인이 되었음.

        localStorage.setItem("refreshToken", action.payload.refreshToken);
        localStorage.setItem("accessToken", action.payload.accessToken);
        toast.info("로그인 되었습니다 !");
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
        state.userAuthData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.userAuthData = initialState.userAuthData; // 유저 데이터 초기화
        state.isAuth = false;
        localStorage.removeItem("accessToken"); // 만료가 된경우
      })
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfileData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        // console.log("dd");
        // console.log(action.payload);
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.userProfileData = initialState.userProfileData;
      })
      .addCase(porfileChange.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(porfileChange.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.info("프로필이 변경되었습니다.");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        //console.log(action.payload);
      })
      .addCase(porfileChange.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        localStorage.removeItem("accessToken"); // 만료가 된경우
      });
  },
});

export default userSlice.reducer;
