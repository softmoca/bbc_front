import Link from "next/link";
import React from "react";

export default function PostItem({ dpost }) {
  return (
    <Link href={"/"}>
      <div className="border-b p-3">
        <p className="font-bold">{dpost.postTitle} </p>
        <p>{dpost.postContent} </p>
        <p>
          👍🏻 {dpost.postLike} 💬 {dpost.commentCount} {dpost.createdAt}
        </p>
      </div>
    </Link>
  );
}
