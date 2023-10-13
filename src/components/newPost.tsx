import Link from "next/link";
import React from "react";

export default function NewPostButton() {
  return (
    <div className=" text-xl font-bold flex flex-col  items-center w-full fixed bottom-5  p-5">
      <Link href={"/newpost"}>
        <button className=" mb-10 bg-orange-300 rounded-md shadow-md">
          + 글쓰기
        </button>
      </Link>
    </div>
  );
}
