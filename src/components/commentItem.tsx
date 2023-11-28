/* eslint-disable @next/next/no-img-element */
import React from "react";
import gravatar from "gravatar";

export default function CommentItem({ dcomment }) {
  const dcommentId = dcomment.id;
  const CommentNickName = dcomment.author.nickName;
  const postAnonymous = dcomment.commentAnonymous;
  const commnetNickName = dcomment.author.nickName;

  const commentContent = dcomment.commentContent;
  const authorEmail = dcomment.author.email;

  const createdAt = dcomment.createdAt;
  const month_day = createdAt.slice(5, 10).replace("-", "/");
  const hour_minute = createdAt.slice(11, 16);

  return (
    <div>
      <div className=" flex mt-4">
        <div>
          <img
            src={gravatar.url(authorEmail, { s: "25px", d: "mm" })}
            alt={CommentNickName}
          />
        </div>

        <div>
          <div className="ml-5 font-extrabold">{`${commnetNickName}`}</div>

          <div className="ml-5 text-xs  text-gray-300   ">
            {month_day} {hour_minute}
          </div>
        </div>
      </div>
      <div className="mt-2 font-normal "> {`${commentContent}`}</div>
    </div>
  );
}
