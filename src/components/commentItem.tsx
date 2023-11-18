/* eslint-disable @next/next/no-img-element */
import React from "react";
import gravatar from "gravatar";

export default function CommentItem({ dcomment }) {
  const dcommentId = dcomment.id;
  const CommentNickName = dcomment.author.nickName;
  const postAnonymous = dcomment.commentAnonymous;
  const commnetNickName = dcomment.author.nickName;
  const commentCreateAt = dcomment.createdAt;
  const commentContent = dcomment.commentContent;
  const authorEmail = dcomment.author.email;

  //console.log(authorEmail);

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

          <div className="ml-5 text-xs font-thin  ">{`${commentCreateAt}`}</div>
        </div>
      </div>
      <div className="mt-2 font-normal "> {`${commentContent}`}</div>
    </div>
  );
}
