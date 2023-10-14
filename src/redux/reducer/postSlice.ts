import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  bimaPost,
  bokjiPost,
  centerLibraryPost,
  chambitPost,
  dormitoryPost,
  hanulPost,
  hwadoPost,
  okuiPost,
  registerPost,
  saebitPost,
  theaterPost,
} from "../thunkFunctions/psotThunk";

const initialState = {
  postData: {
    id: "",
    email: "",
    test: "",
    image: "",
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
        toast.info("글작성에 성공하였습니다.");
      })
      .addCase(registerPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(dormitoryPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dormitoryPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(dormitoryPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(bimaPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bimaPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(bimaPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(bokjiPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bokjiPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(bokjiPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(centerLibraryPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(centerLibraryPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(centerLibraryPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(chambitPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(chambitPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(chambitPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(theaterPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(theaterPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(theaterPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(hanulPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hanulPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(hanulPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(saebitPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saebitPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(saebitPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(hwadoPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hwadoPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(hwadoPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      })
      .addCase(okuiPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(okuiPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload; // 백엔드로 api 요청 한 후 return으로 받은 json
        //console.log(action.payload);
      })
      .addCase(okuiPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.postData = initialState.postData; // 유저 데이터 초기화
      });
  },
});

export default postSlice.reducer;
