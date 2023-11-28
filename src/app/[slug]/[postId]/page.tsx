/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import CommentItem from "@/components/commentItem";
import { getComments } from "@/redux/thunkFunctions/commentThunk";
import { getPost } from "@/redux/thunkFunctions/psotThunk";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";

export default function page() {
  const postNamePath = usePathname();
  const postId = postNamePath.substring(5);
  const BoardId = postNamePath.slice(1, 4);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId)); //thucnk 함수 이름은 authUser
    dispatch(getComments(postId));
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  const dDetailPosts = useSelector(
    (state) => state.persistedReducer.post.postDetailData
  );

  const createdAt = dDetailPosts.createdAt;
  const month_day = createdAt.slice(5, 10).replace("-", "/");
  const hour_minute = createdAt.slice(11, 16);

  const dComments = useSelector(
    (state) => state.persistedReducer.comment.commentData
  );

  const BoardTitle = dDetailPosts.board.BoardTitle;
  const PostNickName = dDetailPosts.author.nickName;
  const PostUserEmail = dDetailPosts.author.email;

  return (
    <section className="m-3 border rounded-lg p-1">
      <div className="  font-bold flex  justify-between items-center">
        <div></div>
        <h1 className="text-xl font-bold">{`${BoardTitle} 게시판`} </h1>
        <div></div>
      </div>

      <div className=" flex mt-3">
        <div className=" border-2 rounded-xl">
          <img
            className=" w-[45px] h-[40px] rounded-full "
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/userProfileDefault.png`}
            alt="익명 사용자"
          />
        </div>

        <div className="ml-3 font-bold">{`${PostNickName}`}</div>
        <button className="ml-auto pr-3 pl-3 mr-3 bg-red-200 rounded-2xl font-extrabold">
          채팅방 참여
        </button>
      </div>
      <div className="border-b mt-3 mb-3"></div>
      <div className="mt-3">
        <h1 className="text-lg font-bold">{`${dDetailPosts.postTitle} `} </h1>
        <div className=" mb-10">{`${dDetailPosts.postContent} `} </div>

        {dDetailPosts.images.length > 0 && (
          <img
            className="min-w-[100px] h-[100px] mb-1"
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${dDetailPosts.images[0]?.path}`}
            alt="image"
          />
        )}

        <p className=" text-sm mb-1">
          {dDetailPosts.postLike !== 0 && ( // postLike이 0이 아닌 경우에만 렌더링
            <span className="mr-3 text-red-500 font-bold">
              👍🏻 {dDetailPosts.postLike}
            </span>
          )}
          {dDetailPosts.commentCount !== 0 && ( // commentCount가 0이 아닌 경우에만 렌더링
            <span className="mr-3 text-sky-400 font-bold">
              💬 {dDetailPosts.commentCount}
            </span>
          )}
          <span className="text-gray-300">
            {month_day} {hour_minute}
          </span>
        </p>

        <img
          className="w-[420px] h-[70px] "
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/advertist_example.png`}
          alt="광고 예제"
        />

        <div>
          <div>
            {dComments.map((dcomment) => (
              <CommentItem dcomment={dcomment} key={dcomment.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
