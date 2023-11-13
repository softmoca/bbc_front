"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import PostItem from "../../components/postItem";
import { useDispatch, useSelector } from "react-redux";
import { dormitoryPost } from "@/redux/thunkFunctions/psotThunk";

import NewPostButton from "@/components/newPostButton";
import { usePathname } from "next/navigation";

export default function Dormitory() {
  const boardName = usePathname();

  const dispatch = useDispatch();
  const dPosts = useSelector(
    (state) => state.persistedReducer.post.postData.data
  );

  useEffect(() => {
    dispatch(dormitoryPost()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={"/"}>{"<"}</Link>
        <h1 className="text-xl font-bold">기숙사 게시판 </h1>
        <button type="submit">검색 임티 </button>
      </div>

      <div>
        {dPosts.map((dpost) => (
          <PostItem dpost={dpost} key={dpost.id} />
        ))}
      </div>

      <div className="w-1/3 text-3xl font-bold flex flex-col  items-center  fixed bottom-10  p-5">
        <Link href={`${boardName}/createpost`}>
          <button className=" mb-10 bg-orange-300 rounded-md shadow-md">
            + 글쓰기
          </button>
        </Link>
      </div>
    </section>
  );
}
