import Link from "next/link";
import React from "react";
import PostItem from "../../components/postItem";

export default function Dormitory() {
  return (
    <section>
      <div className=" text-xl font-bold flex  justify-between items-center">
        <Link href={"/jonggo"}>{"<"}</Link>
        <h1 className="text-xl font-bold">중고 거래 게시판 </h1>
        <button type="submit">검색 임티 </button>
      </div>

      <div>
        <PostItem />
      </div>
    </section>
  );
}
