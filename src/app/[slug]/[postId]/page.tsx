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
    <section className="m-3 border rounded-lg">
      <div className=" text-xl font-bold flex  justify-between items-center">
        <h1 className="text-xl font-bold">{`${BoardTitle} 게시판`} </h1>
      </div>

      <div className=" flex mt-3">
        <div>
          <img
            src={gravatar.url(PostUserEmail, { s: "25px", d: "mm" })}
            alt={PostNickName}
          />
        </div>

        <div className="ml-10 font-bold">{`${PostNickName}`}</div>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-bold">{`${dDetailPosts.postTitle} `} </h1>
        <div className="text-m mb-20">{`${dDetailPosts.postContent} `} </div>

        {dDetailPosts.images.length > 0 && (
          <img
            className="min-w-[100px] h-[100px]"
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${dDetailPosts.images[0]?.path}`}
            alt="image"
          />
        )}

        <p className=" text-xs ">
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
          className=" w-full mb-3 rounded"
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
