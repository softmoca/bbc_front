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

  const dComments = useSelector(
    (state) => state.persistedReducer.comment.commentData
  );

  const BoardTitle = dDetailPosts.board.BoardTitle;
  const PostNickName = dDetailPosts.author.nickName;
  const PostUserEmail = dDetailPosts.author.email;

  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={`${BoardId}`}>{"<"}</Link>
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

        <div className="flex">
          <div className="mr-3 text-xs"> 👍🏻 {`${dDetailPosts.postLike} `}</div>
          <div className="mr-3 text-xs">
            💬 {`${dDetailPosts.commentCount} `}
          </div>
          <div className="mr-3 text-xs">{`${dDetailPosts.createdAt} `}</div>
          <div>채팅방참여</div>
        </div>

        <div className="m-10">광고</div>

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
