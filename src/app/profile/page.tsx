"use client";

import { getUserData } from "@/redux/thunkFunctions/userThunk";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return <div>TO DO 프로필 페이지</div>;
}
