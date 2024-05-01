/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  authUser,
  getUserData,
  loginOutUser,
} from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { useRouter } from "next/navigation";

export default function Profile() {
  const dispatch = useDispatch();
  let router = useRouter();
  useEffect(() => {
    dispatch(getUserData()); //thucnk 함수 이름은 authUser
    console.log("dddd");
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  const userProfileData = useSelector(
    (state) => state.persistedReducer.user.userProfileData
  );

  const logout = () => {
    dispatch(loginOutUser());

    // router.push("/");
  };

  console.log(userProfileData);

  return (
    <div className="m-3">
      <div className=" flex mt-4 mb-5 ">
        <div className=" border-2 rounded-xl">
          <img
            className=" w-[60px] h-[50px] rounded-full "
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/userProfileDefault.png`}
            alt="익명 사용자"
          />
        </div>
        <div>
          <div className="ml-3 text-xl font-extrabold">{`${userProfileData.email}`}</div>
          <div className="ml-3  font-bold text-gray-800  ">{`${userProfileData.nickName}`}</div>
        </div>
      </div>

      <div className=" mb-5  font-bold bg-gray-100 rounded-md shadow-md">
        <h1 className="text-2xl font-extrabold "> 계정 </h1>
        <Link href={`/profile/${userProfileData.id}`}>
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
          <h1 className="mb- mt-2" onClick={logout}>
            {" "}
            로그아웃
          </h1>
        </Link>{" "}
      </div>
    </div>
  );
}
