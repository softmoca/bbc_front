"use client";

import { getBoardPosts } from "@/redux/thunkFunctions/psotThunk";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Post() {
  const boardNamePath = usePathname();
  const boardId = boardNamePath.substring(1);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(boardId);
    dispatch(getBoardPosts(boardId)); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return <div></div>;
}
