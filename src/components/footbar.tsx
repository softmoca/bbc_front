import Link from "next/link";
import React from "react";

export default function Footbar() {
  return (
    <div className=" w-1/3 text-xl font-bold flex  justify-between items-center fixed bottom-0  p-5 border">
      <Link href={"/"}>홈</Link>
      <Link href={"/chats"}>채팅</Link>
      <Link href={"/alarm"}>알림</Link>
      <Link href={"/profile"}>프로필</Link>
    </div>
  );
}
