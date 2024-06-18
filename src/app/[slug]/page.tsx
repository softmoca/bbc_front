/* eslint-disable @next/next/no-img-element */
"use client";

import PostItem from "@/components/postItem";
import { AppDispatch } from "@/redux/store/store";
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

  const dispatch: AppDispatch = useDispatch();

  const dPosts = useSelector(
    (state: any) => state.persistedReducer.post.postData
  );
  // console.log(dPosts);

  useEffect(() => {
    dispatch(getBoardPosts(boardId));
  }, []);

  useEffect(() => {
    const boardTitle = findBoardTitle(boardId);

    setBoardTitle(boardTitle);
  }, [boardId]);

  return (
    <section className="m-3 ">
      <div className=" text-xl font-bold flex  justify-between items-center">
        <div></div>
        <h1 className="text-xl font-bold">{`${boardTitle} 게시판`} </h1>
        <button type="submit">🔍 </button>
      </div>

      <img
        className=" my-2 w-full mb-3 rounded"
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/advertist_example.png`}
        alt="광고 예제"
      />

      <div>
        {dPosts.map((dpost: any) => (
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
