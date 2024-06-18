import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Footbar() {
  const isAuth = useSelector(
    (state: any) => state.persistedReducer.user.isAuth
  );
  console.log(isAuth);

  return (
    <div>
      {isAuth ? (
        <div className=" w-1/3 bg-white text-xl font-bold flex  justify-between items-center fixed bottom-0  p-4 m-1 border rounded-lg ">
          <Link href={"/"}>홈</Link>

          <Link href={"/d/e/m/o"}>채팅</Link>
          <Link href={"/d/e/m/o"}>알림</Link>
          <Link href={"/profile"}>프로필</Link>
        </div>
      ) : (
        <div className=" w-1/3 text-xl font-bold flex  justify-between items-center fixed bottom-0  p-4 m-1 border rounded-lg ">
          <Link href={"/"}>홈</Link>

          <Link href={"/signin"}>로그인</Link>
        </div>
      )}
    </div>
  );
}
