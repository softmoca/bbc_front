import Link from "next/link";
import React from "react";

export default function Jonggo() {
  return (
    <div>
      jonggo
      <br /> <br /> <br /> <br />
      <br />
      <Link href={"/newpost"}>
        <button className=" mb-10 bg-orange-300 rounded-md shadow-md">
          + 글쓰기
        </button>
      </Link>
    </div>
  );
}
