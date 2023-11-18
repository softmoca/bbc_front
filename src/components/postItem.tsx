import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PostItem({ dpost }) {
  const dpostId = dpost.id;

  const boardNamePath = usePathname();
  const boardId = boardNamePath.substring(1);

  return (
    <Link href={`/${boardId}/${dpostId}`}>
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
