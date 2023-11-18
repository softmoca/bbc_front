"use client";

import { authUser } from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.persistedReducer.user.isAuth); // 전체 state 를 가져오기
  const { pathname } = usePathname();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser()); //thucnk 함수 이름은 authUser
    }
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  return (
    <div className="bg-white flex flex-col mb-20">
      <div className="  mb-10 bg-gray-100 rounded-md shadow-md">
        <Link href="/101" className="text-xl mb-1 font-bold ">
          <h1 className="mb-1"> 🔥주간 애브리타임 인기글🔥</h1>
        </Link>{" "}
        <Link href="/102" className="text-xl mb-1 font-bold ">
          <h1> 🔥주간 유튜브 인기영상🔥</h1>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-2">학교내 소통 게시판</h1>
      <div className=" mb-10  font-bold bg-gray-100 rounded-md shadow-md">
        <Link href="/103">
          <h1 className="mb-2"> 🥕 중고 거래 게시판</h1>
        </Link>{" "}
        <Link href="/104">
          <h1 className="mb-2"> 📦 공동 구매 게시판</h1>
        </Link>{" "}
        <Link href="/105">
          <h1 className="mb-2"> 🍚 밥친구 게시판</h1>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-2">핫플 건물별 소통 게시판</h1>

      <div className="  mb-10 font-bold bg-gray-100 rounded-md shadow-md">
        <Link href="/106">
          <h1 className="mb-2"> 📌 기숙사(빛솔재)</h1>
        </Link>
        <Link href="/107">
          <h1 className="mb-2">📌 중앙 도서관</h1>
        </Link>
        <Link href="/108">
          <h1 className="mb-2">📌 노천극장</h1>
        </Link>
        <Link href="/109">
          <h1 className="mb-2">📌 복지관</h1>
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-2 ">건물별 소통 게시판</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold bg-gray-100 rounded-md shadow-md">
        <div>
          <Link href="/110">
            <h1 className="mb-2">📌 비마관</h1>
          </Link>{" "}
          <Link href="/111">
            <h1 className="mb-2">📌 한울관</h1>
          </Link>{" "}
          <Link href="/112">
            <h1 className="mb-2">📌 화도관</h1>
          </Link>{" "}
          <Link href="/113">
            <h1 className="mb-2">📌 누리관</h1>
          </Link>{" "}
        </div>

        <div>
          <Link href="/114">
            <h1 className="mb-2">📌 참빛관</h1>
          </Link>{" "}
          <Link href="/115">
            <h1 className="mb-2">📌 새빛관</h1>
          </Link>{" "}
          <Link href="/116">
            <h1 className="mb-2">📌 옥의관</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
