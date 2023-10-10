import Link from "next/link";
import React from "react";

export default function Jonggo() {
  return (
    <div>
      jonggo
      <br /> <br /> <br /> <br />
      <br />
      <Link href={"/newpost"}>
        <button>+ 글쓰기</button>
      </Link>
    </div>
  );
}
