"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import PostItem from "../../components/postItem";
import { useDispatch, useSelector } from "react-redux";

import NewPostButton from "@/components/newPost";
import { nuriPost } from "@/redux/thunkFunctions/psotThunk";

export default function Okui() {
  const dispatch = useDispatch();
  const dPosts = useSelector(
    (state) => state.persistedReducer.post.postData.data
  );

  useEffect(() => {
    dispatch(nuriPost()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={"/"}>{"<"}</Link>
        <h1 className="text-xl font-bold">누리관 게시판 </h1>
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
