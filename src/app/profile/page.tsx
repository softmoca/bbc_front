"use client";

import { getUserData } from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  const userData = useSelector((state) => state.persistedReducer.user.userData);

  return (
    <div className="m-3">
      <div className=" flex mt-3">
        <div> 😀</div>

        <div className="ml-10 font-bold">{`${userData.nickName}`}</div>
      </div>

      <div className=" mb-10  font-bold bg-gray-100 rounded-md shadow-md">
        <h1 className="text-2xl font-extrabold "> 계정 </h1>
        <Link href="/">
          <h1 className="mb-1 mt-2"> 닉네임/프로필 사진 변경</h1>
        </Link>{" "}
        <Link href="/">
          <h1 className="mb-1"> 비밀번호 변경</h1>
        </Link>{" "}
      </div>

      <div className=" mb-10  font-bold bg-gray-100 rounded-md shadow-md">
        <h1 className="text-2xl font-extrabold mt-1"> 커뮤니티 </h1>
        <Link href="/">
          <h1 className="mb-1 mt-2"> 좋아요 게시물</h1>
        </Link>{" "}
        <Link href="/">
          <h1 className="mb-1"> 나의 게시물</h1>
        </Link>{" "}
        <Link href="/">
          <h1 className="mb-1"> 나의 댓글</h1>
        </Link>{" "}
        <Link href="/">
          <h1 className="mb-1"> 알람설정</h1>
        </Link>{" "}
      </div>

      <div className=" mb-5  font-bold bg-gray-100 rounded-md shadow-md">
        <h1 className="text-2xl font-extrabold mt-1"> 기타 </h1>
        <Link href="/">
          <h1 className="mb- mt-2"> 회원탈퇴</h1>
        </Link>{" "}
        <Link href="/">
          <h1 className="mb-1"> 로그아웃</h1>
        </Link>{" "}
      </div>
    </div>
  );
}
