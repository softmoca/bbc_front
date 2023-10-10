"use client";

import { authUser } from "@/redux/features/userSlice";
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
  }); // 권한이 바뀌거나 or url경로가 바뀌거나

  return (
    <div>
      <div className="mb-5">
        <Link href="/everytimehot" className="text-xl mb-1 font-bold ">
          <h1> 🔥주간 애브리타임 인기글🔥</h1>
        </Link>{" "}
        <Link href="/youtubehot" className="text-xl mb-1 font-bold ">
          <h1> 🔥주간 유튜브 인기영상🔥</h1>
        </Link>
      </div>

      <div className="mb-5">
        <div>
          <h1 className="text-xl mb-1 font-bold ">학교내 소통 게시판</h1>
        </div>
        <Link href="/jonggo">
          <h1> 🥕 중고 거래 게시판</h1>
        </Link>{" "}
        <Link href="/grouppurchase">
          <h1> 📦 공동 구매 게시판</h1>
        </Link>{" "}
        <Link href="/foodfriend">
          <h1> 🍚 밥친구 게시판</h1>
        </Link>
      </div>

      <div className="mb-5">
        <div>
          <h1 className="text-xl mb-1 font-bold ">핫플 건물별 소통 게시판</h1>
        </div>

        <Link href="/dormitory">
          <h1> 📌 기숙사(빛솔재)</h1>
        </Link>
        <Link href="/centerlibrary">
          <h1>📌 중앙 도서관</h1>
        </Link>
        <Link href="/theater">
          <h1>📌 노천국장</h1>
        </Link>
        <Link href="/bokji">
          <h1>📌 복지관</h1>
        </Link>
      </div>

      <div className="mb-5">
        <div>
          <h1 className="text-xl mb-1 font-bold ">건물별 소통 게시판</h1>
        </div>
        <Link href="/bima">
          <h1>📌 비마관</h1>
        </Link>{" "}
        <Link href="/chambit">
          <h1>📌 참빛관</h1>
        </Link>{" "}
        <Link href="/hanul">
          <h1>📌 한울관</h1>
        </Link>{" "}
        <Link href="/saebit">
          <h1>📌 새빛관</h1>
        </Link>{" "}
        <Link href="/hwado">
          <h1>📌 화도관</h1>
        </Link>{" "}
        <Link href="/okui">
          <h1>📌 옥의관</h1>
        </Link>
        <Link href="/nuri">
          <h1>📌 누리관</h1>
        </Link>
      </div>
    </div>
  );
}
