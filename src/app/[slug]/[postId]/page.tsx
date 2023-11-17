"use client";

import { getPost } from "@/redux/thunkFunctions/psotThunk";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const postNamePath = usePathname();
  const postId = postNamePath.substring(5);
  const BoardId = postNamePath.slice(1, 4);
  console.log(BoardId);

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

  const BoardTitle = dDetailPosts.board.BoardTitle;

  return (
    <div>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={`${BoardId}`}>{"<"}</Link>
        <h1 className="text-xl font-bold">{`${BoardTitle} 게시판`} </h1>
      </div>
    </div>
  );
}
