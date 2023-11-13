"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import PostItem from "../../../components/postItem";
import { useDispatch, useSelector } from "react-redux";
import { chambitPost } from "@/redux/thunkFunctions/psotThunk";
import NewPostButton from "@/components/newPostButton";

export default function Chatbit() {
  const dispatch = useDispatch();
  const dPosts = useSelector(
    (state) => state.persistedReducer.post.postData.data
  );
  //TODO 사용자 정도 포함된거 가져오기

  useEffect(() => {
    dispatch(chambitPost()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={"/"}>{"<"}</Link>
        <h1 className="text-xl font-bold">참빛관 게시판 </h1>
        <button type="submit">검색 임티 </button>
      </div>

      <div>
        {dPosts.map((dpost) => (
          <PostItem dpost={dpost} key={dpost.postIdx} />
        ))}
      </div>
      <NewPostButton />
    </section>
  );
}
