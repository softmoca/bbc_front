"use client";

import PostItem from "@/components/postItem";
import { getBoardPosts } from "@/redux/thunkFunctions/psotThunk";
import { findBoardTitle } from "@/utils/findBoardTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Post() {
  const [boardTitle, setBoardTitle] = useState("");
  const boardNamePath = usePathname();
  const boardId = parseInt(boardNamePath.substring(1));

  const dispatch = useDispatch();

  const dPosts = useSelector((state) => state.persistedReducer.post.postData);

  useEffect(() => {
    dispatch(getBoardPosts(boardId)); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  useEffect(() => {
    const boardTitle = findBoardTitle(boardId);

    setBoardTitle(boardTitle);
  }, [boardId]);

  //const BoardTitle = dPosts[1].board.BoardTitle;

  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={"/"}>{"<"}</Link>
        <h1 className="text-xl font-bold">{`${boardTitle} 게시판`} </h1>
        <button type="submit">🔍 </button>
      </div>

      <div className="m-5"> 광고 </div>

      <div>
        {dPosts.map((dpost) => (
          <PostItem dpost={dpost} key={dpost.id} />
        ))}
      </div>

      <div className="w-1/3 text-3xl font-bold flex flex-col  items-center  fixed bottom-10  p-5">
        <Link href={`${boardId}/createpost`}>
          <button className=" mb-10 bg-orange-300 rounded-md shadow-md">
            + 글쓰기
          </button>
        </Link>
      </div>
    </section>
  );
}
