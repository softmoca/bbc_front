import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PostItem({ dpost }) {
  const dpostId = dpost.id;

  const boardNamePath = usePathname();
  const boardId = boardNamePath.substring(1);

  return (
    <Link href={`/${boardId}/${dpostId}`}>
      <div className=" mb-3 ">
        <p className="font-bold">{dpost.postTitle} </p>
        <p className="text-sm">{dpost.postContent} </p>

        <p className=" text-xs ">
          {dpost.postLike !== 0 && ( // postLike이 0이 아닌 경우에만 렌더링
            <span className="mr-3 text-red-500 font-bold">
              👍🏻 {dpost.postLike}
            </span>
          )}
          {dpost.commentCount !== 0 && ( // commentCount가 0이 아닌 경우에만 렌더링
            <span className="mr-3 text-sky-400 font-bold">
              💬 {dpost.commentCount}
            </span>
          )}
          <span className="text-gray-300">{dpost.createdAt}</span>
        </p>

        <div className="border-b mt-2"> </div>
      </div>
    </Link>
  );
}
