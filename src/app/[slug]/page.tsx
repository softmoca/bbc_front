"use client";

import PostItem from "@/components/postItem";
import { getBoardPosts } from "@/redux/thunkFunctions/psotThunk";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Post() {
  const boardNamePath = usePathname();
  const boardId = boardNamePath.substring(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardPosts(boardId)); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  const dPosts = useSelector((state) => state.persistedReducer.post.postData);
  console.log(dPosts);

  let BoardTitle = "";
  if (dPosts.length > 0) {
    BoardTitle = dPosts[1].board.BoardTitle;
  }

  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={"/"}>{"<"}</Link>
        <h1 className="text-xl font-bold">{`${BoardTitle} 게시판`} </h1>
        <button type="submit">🔍 </button>
      </div>

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
