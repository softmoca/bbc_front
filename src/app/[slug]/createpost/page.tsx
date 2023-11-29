/* eslint-disable @next/next/no-img-element */
"use client";

import { registerPost } from "@/redux/thunkFunctions/psotThunk";
import { authUser } from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import axiosInstance from "@/utils/axios";
import { usePathname, useRouter } from "next/navigation";

//  TODO <과 완료 부르면 바로 뒤 페이지로 이동하게
export default function Newpost() {
  const newPostPath = usePathname();
  const parts: string[] = newPostPath.split("/");
  const boardId = parts[1];
  let router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const isAuth = true;

  const [postImage, setPostImage] = useState([]);

  const newPostTitle = {
    required: "게시글 제목은  필수 요소입니다.",
  };
  const newPostChatRoomTitle = {
    required: " 채팅방 이름필수 요소입니다.",
  };

  const newPostContent = {
    required: "게시글 내용은 필수 요소입니다.",
  };

  const newbuildingName = {
    required: "필수 입니다",
  };

  const handleDrop = async (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" }, // 헤더에 타입 명시
    };

    formData.append("image", files[0]); //file이라는 키와 files(파일들의 정보 객체) 값을 추가

    try {
      // 백엔드에서 위에서 생성한 config와 formdata 보내기
      const response = await axiosInstance.post(
        "/common/image",
        formData,
        config
      );

      setPostImage([response.data.path]);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = ({ postTitle, chatRoomTitle, postContent }) => {
    // 페이지에서 입력 한 값
    const body = {
      postTitle: postTitle,
      postContent: postContent,
      chatRoomTitle: chatRoomTitle,
      boardId: boardId,
    };

    if (postImage.length > 0) {
      body.images = postImage;
    }

    //console.log(body);

    dispatch(registerPost(body));
    setPostImage([]);
    reset(); //react-hook-form으로 입력후 입력값 초기화
    router.push(`/${boardId}`);
  };

  return (
    <div>
      {isAuth ? (
        <div className="p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-xl font-bold flex  justify-between items-center">
              <div>{""}</div>
              <h1 className="text-xl font-bold">글쓰기 </h1>

              <button
                type="submit"
                className="w-1/6 px-2 py-2 border bg-red-300 rounded-md"
              >
                완료
              </button>
            </div>

            <div className=" flex   mb-2 mt-10">
              <input
                placeholder="제목"
                type="postTitle"
                id="postTitle"
                className="w-1/3 px-4 py-2 mt-2 border-b bg-white rounded-md"
                {...register("postTitle", newPostTitle)}
              ></input>

              <div className="w-1/3"></div>
              <input
                placeholder="채팅방 이름"
                type="chatRoomTitle"
                id="chatRoomTitle"
                className="w-1/3 px-4 py-2 mt-2 border bg-red-100 rounded-md"
                {...register("chatRoomTitle", newPostChatRoomTitle)}
              ></input>
            </div>

            <div className="flex mb-10">
              {errors?.postTitle && (
                <div className="w-1/3">
                  <span className="text-red-500">
                    {errors.postTitle.message}
                  </span>
                </div>
              )}
              <div className="w-1/3"></div>
              {errors?.chatRoomTitle && (
                <div className="w-1/3">
                  <span className="text-red-500">
                    {errors.chatRoomTitle.message}
                  </span>
                </div>
              )}
            </div>

            <div className="text-xl font-bold flex  justify-between items-centemb p-5 ">
              <div className="flex">
                {" "}
                <Dropzone onDrop={handleDrop}>
                  {(
                    { getRootProps, getInputProps } //Dropzone 에서 가져온 인자들
                  ) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>📷</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
            <div>
              {postImage.length > 0 && (
                <img
                  className="min-w-[100px] h-[100px]"
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/temp/${postImage}`}
                  alt="image"
                />
              )}
            </div>
            <input
              placeholder="내용을 입력하세요.."
              type="postContent"
              id="postContent"
              className="w-full h-32 border rounded-md px-4 py-2 mt-2  bg-white "
              {...register("postContent", newPostContent)}
            ></input>
            {errors?.postContent && (
              <div>
                <span className="text-red-500">
                  {errors.postContent.message}
                </span>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div> 로그인을 해야 글을 작성할 수 있습니다.</div>
      )}
    </div>
  );
}
