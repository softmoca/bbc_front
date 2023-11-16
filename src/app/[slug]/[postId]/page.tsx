"use client";

import { getPost } from "@/redux/thunkFunctions/psotThunk";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const postNamePath = usePathname();
  const postId = postNamePath.substring(5);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getPost(postId)); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dDetailPosts = useSelector(
    (state) => state.persistedReducer.post.postDetailData
  );

  console.log(dDetailPosts);

  return <div>개별게시물</div>;
}
