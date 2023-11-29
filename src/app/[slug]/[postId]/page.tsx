/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import CommentItem from "@/components/commentItem";
import { getComments } from "@/redux/thunkFunctions/commentThunk";
import { getPost } from "@/redux/thunkFunctions/psotThunk";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axios";

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
  const [inputValue, setInputValue] = useState("");
  const [responseFromBackend, setResponseFromBackend] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axiosInstance.post(
        `http://localhost:3030/post/${postId}/comment`, //백엔드 api url
        { commentContent: inputValue }
      );
      toast.info("댓글이 작성되었습니다.");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log("www");
      console.error("에러 발생:", error);
      toast.error("댓글이 작성되지 않았습니다 ! ");
    }

    try {
      // 여기에서 실제로 백엔드로 데이터를 보내는 API 호출을 수행합니다.
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      });

      // 서버 응답을 처리하고 필요한 경우 상태를 업데이트합니다.
      const data = await response.json();
      setResponseFromBackend(data);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <section className="m-3  rounded-lg p-1">
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

      <div className="flex border rounded-lg ">
        <img
          className=" w-[45px] h-[40px] rounded-full p-1"
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/userProfileDefault.png`}
          alt="익명 사용자"
        />
        <div className="flex flex-grow">
          <input
            className=" p-1  flex-grow w -full text-sm  border bg-white rounded-md"
            placeholder="댓글 추가..."
            type="comment"
            id="comment"
            onChange={handleInputChange}
            value={inputValue}
          />

          <button
            onClick={handleButtonClick}
            className="ml-2  text-white duration-200 bg-black   hover:bg-gray-700 rounded"
          >
            댓글 입력
          </button>
        </div>
      </div>
    </section>
  );
}
