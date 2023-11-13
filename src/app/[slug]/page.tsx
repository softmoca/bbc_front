"use client";

import { getBoardPosts } from "@/redux/thunkFunctions/psotThunk";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Post() {
  const boardName = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardPosts(boardName)); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return <div></div>;
}
