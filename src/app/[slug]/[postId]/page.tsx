/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axios";
import CommentItem from "@/components/commentItem";
import { getComments } from "@/redux/thunkFunctions/commentThunk";
import { getPost } from "@/redux/thunkFunctions/psotThunk";
import { AppDispatch } from "@/redux/store/store";

export default function Page() {
  const postNamePath = usePathname();
  const postId = postNamePath.substring(5);
  const BoardId = postNamePath.slice(1, 4);
  let router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (postId) {
      dispatch(getPost(postId));
      dispatch(getComments(postId));
    }
  }, [dispatch, postId]);

  const dDetailPosts = useSelector(
    (state: any) => state.persistedReducer.post.postDetailData
  );

  const dComments = useSelector(
    (state: any) => state.persistedReducer.comment.commentData
  );

  const createdAt = dDetailPosts.createdAt || "";
  const month_day = createdAt.slice(5, 10).replace("-", "/");
  const hour_minute = createdAt.slice(11, 16);

  const BoardTitle = dDetailPosts.board?.BoardTitle || "게시판 제목";
  const PostNickName = dDetailPosts.author?.nickName || "익명 사용자";
  const [inputValue, setInputValue] = useState("");
  const [responseFromBackend, setResponseFromBackend] = useState(null);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    if (!inputValue.trim()) {
      toast.error("댓글을 작성해주세요!");
      return;
    }

    try {
      const response = await axiosInstance.post(
        `http://52.78.34.195:3333/post/${postId}/comment`, //백엔드 api url
        { comment: inputValue }
      );
      toast.info("댓글이 작성되었습니다.");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("에러 발생:", error);
      toast.error("댓글이 작성되지 않았습니다!");
    }
  };

  const handleButtonDeleteClick = async () => {
    try {
      const response = await axiosInstance.delete(
        `http://52.78.34.195:3333/post/${postId}/` //백엔드 api url
      );
      toast.info("게시글이 성공적으로 삭제되었습니다 !");
      router.push(`/${BoardId}`);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);
    } catch (error) {
      console.error("에러 발생:", error);
      toast.error("본인이 작성한 게시글만 삭제할 수 있습니다!");
    }
  };

  return (
    <section className="m-3 rounded-lg p-1">
      <div className="font-bold flex justify-between items-center">
        <div></div>
        <h1 className="text-xl font-bold">{`${BoardTitle} 게시판`} </h1>
        <div></div>
      </div>

      <div className="flex mt-3">
        <div className="border-2 rounded-xl">
          <img
            className="w-[45px] h-[40px] rounded-full"
            src={"http://52.78.34.195:3333/public/userProfileDefault.png"}
            alt="익명 사용자"
          />
        </div>

        <div className="flex justify-between items-center mt-3 w-full">
          <div className="font-bold">{PostNickName}</div>
          <button
            onClick={handleButtonDeleteClick}
            className="text-white duration-200 bg-black hover:bg-gray-700 rounded"
          >
            삭제하기
          </button>
        </div>
      </div>
      <div className="border-b mt-3 mb-3"></div>
      <div className="mt-3">
        <h1 className="text-lg font-bold">{`${dDetailPosts.postTitle} `} </h1>
        <div className="mb-10">{`${dDetailPosts.postContent} `} </div>

        {dDetailPosts.images.length > 0 && (
          <img
            className="min-w-[100px] h-[100px] mb-1 w-full object-contain"
            src={`http://52.78.34.195:3333${dDetailPosts.images[0]?.path}`}
            alt="image"
          />
        )}

        <p className="text-sm mb-1">
          {dDetailPosts.postLike !== 0 && (
            <span className="mr-3 text-red-500 font-bold">
              👍🏻 {dDetailPosts.postLike}
            </span>
          )}
          {dDetailPosts.commentCount !== 0 && (
            <span className="mr-3 text-sky-400 font-bold">
              💬 {dDetailPosts.commentCount}
            </span>
          )}
          <span className="text-gray-300">
            {month_day} {hour_minute}
          </span>
        </p>

        <div className="w-full h-[70px]">
          <img
            className="w-full h-full object-contain"
            src={"http://52.78.34.195:3333/public/advertist_example.png"}
            alt="광고 예제"
          />
        </div>

        <div>
          <div className="w-full">
            {dComments.map((dcomment: any) => (
              <CommentItem dcomment={dcomment} key={dcomment.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex border rounded-lg mt-3">
        <img
          className="w-[45px] h-[40px] rounded-full p-1"
          src={"http://52.78.34.195:3333/public/userProfileDefault.png"}
          alt="익명 사용자"
        />
        <div className="flex flex-grow">
          <input
            className="p-1 flex-grow text-sm border bg-white rounded-md"
            placeholder="댓글 추가..."
            type="comment"
            id="comment"
            onChange={handleInputChange}
            value={inputValue}
          />

          <button
            onClick={handleButtonClick}
            className="ml-2 text-white duration-200 bg-black hover:bg-gray-700 rounded"
          >
            댓글 입력
          </button>
        </div>
      </div>
    </section>
  );
}
