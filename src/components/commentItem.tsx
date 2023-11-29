/* eslint-disable @next/next/no-img-element */
import React from "react";
import gravatar from "gravatar";

export default function CommentItem({ dcomment }) {
  const dcommentId = dcomment.id;
  const CommentNickName = dcomment?.author?.nickName;
  const commnetNickName = dcomment?.author?.nickName;

  const commentContent = dcomment?.commentContent;
  const authorEmail = dcomment?.author?.email;

  const createdAt = dcomment?.createdAt;
  const month_day = createdAt?.slice(5, 10).replace("-", "/");
  const hour_minute = createdAt?.slice(11, 16);

  return (
    <div className=" border-b rounded mb-2">
      <div className=" flex mt-2">
        <div className=" border-2 rounded-xl">
          <img
            className=" w-[40px] h-[30px] rounded-full "
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/userProfileDefault.png`}
            alt="익명 사용자"
          />
        </div>

        <div>
          <div className="ml-3 text-sm font-extrabold">{`${commnetNickName}`}</div>

          <div className="ml-3 text-xs  text-gray-300   ">
            {month_day} {hour_minute}
          </div>
        </div>
      </div>
      <div className="mt-2 ml-2 font-normal "> {`${commentContent}`}</div>
    </div>
  );
}
