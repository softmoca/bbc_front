"use client";

import { registerPost } from "@/redux/thunkFunctions/psotThunk";
import { authUser } from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

//  TODO <과 완료 부르면 바로 뒤 페이지로 이동하게
export default function Newpost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.persistedReducer.user.isAuth); // 전체 state 를 가져오기
  console.log(isAuth);

  const onSubmit = ({
    postTitle,
    chatRoomTitle,
    buildingName,
    postContent,
  }) => {
    // 페이지에서 입력 한 값
    const body = {
      postTitle: postTitle,
      postContent: postContent,

      buildingName: buildingName,
      chatRoomTitle: chatRoomTitle,
    };

    dispatch(registerPost(body));

    reset(); //react-hook-form으로 입력후 입력값 초기화
  };

  const newPostTitle = {
    required: "필수 필드입니다.",
  };
  const newPostChatRoomTitle = {
    required: "필수 필드입니다.",
  };

  const newPostContent = {
    required: "필수 필드입니다.",
  };

  const newbuildingName = {
    required: "필수 필드입ㄴ디ㅏ",
  };

  return (
    <div>
      {isAuth ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-xl font-bold flex  justify-between items-center">
              <Link href={"/jonggo"}>{"<"}</Link>
              <h1 className="text-xl font-bold">글쓰기 </h1>
              <button type="submit">완료 </button>
            </div>

            <div className="mb-20">
              <label //입력 요소와 텍스트를 연결하는 데 사용 되는 label 태그
                htmlFor="postTitle" //htmlFor 속성은 레이블이 연결된 입력 요소의 ID를 지정
                className="text-sm font-semibold text-gray-800"
              >
                제목
              </label>
              <input
                placeholder="제목을 입력해주세요."
                type="postTitle"
                id="postTitle"
                className="w-full px-4 py-2 mt-2 border bg-white rounded-md"
                {...register("postTitle", newPostTitle)}
              ></input>
              {errors?.postTitle && (
                <div>
                  <span className="text-red-500">
                    {errors.postTitle.message}
                  </span>
                </div>
              )}
              <label //htmlFor 속성은 레이블이 연결된 입력 요소의 ID를 지정
                className="text-sm font-semibold text-gray-800"
              >
                채팅방
              </label>
              <input
                placeholder="채팅방 이름을 입력하세요.."
                type="chatRoomTitle"
                id="chatRoomTitle"
                className="w-full px-4 py-2 mt-2 border bg-white rounded-md"
                {...register("chatRoomTitle", newPostChatRoomTitle)}
              ></input>
              {errors?.chatRoomTitle && (
                <div>
                  <span className="text-red-500">
                    {errors.chatRoomTitle.message}
                  </span>
                </div>
              )}
            </div>

            <div className="text-xl font-bold flex  justify-between items-centemb mb-5  ">
              <h1>📷</h1>
              <select
                id="buildingName"
                className="  border border-gray-300 rounded "
                {...register("buildingName", newbuildingName)}
              >
                <option value="기숙사(빛솔재)">기숙사(빛솔재)</option>
                <option value="중앙 도서관">중앙 도서관</option>{" "}
                <option value="노천극장">노천극장</option>
                <option value="복지관">복지관</option>
                <option value="비마관">비마관</option>
                <option value="한울관">한울관</option>
                <option value="화도관">화도관</option>
                <option value="참빛관">참빛관</option>
                <option value="새빛관">새빛관</option>
                <option value="옥의관">옥의관</option>
                <option value="누리관">누리관</option>
              </select>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="h-4 w-4 text-indigo-600"
                />
                <label htmlFor="checkbox" className="text-gray-700">
                  익명
                </label>
              </div>
            </div>

            <input
              placeholder="내용을 입력하세요.."
              type="postContent"
              id="postContent"
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md"
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
