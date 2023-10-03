"use client";

import { authUser } from "@/redux/features/userSlice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.persistedReducer.user.isAuth); // 전체 state 를 가져오기
  const { pathname } = usePathname();

  useEffect(() => {
    if (isAuth) {
      console.log("sdf");
      dispatch(authUser()); //thucnk 함수 이름은 authUser
    }
  }); // 권한이 바뀌거나 or url경로가 바뀌거나

  return <h1 className="text-red-900">BBC</h1>;
}
