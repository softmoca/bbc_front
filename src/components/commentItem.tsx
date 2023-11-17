import React from "react";

export default function CommentItem({ dcomment }) {
  const dcommentId = dcomment.id;
  const CommentNickName = dcomment.author.nickName;
  const postAnonymous = dcomment.commentAnonymous;
  const commnetNickName = dcomment.author.nickName;
  const commentCreateAt = dcomment.createdAt;
  const commentContent = dcomment.commentContent;

  return (
    <div>
      <div className=" flex mt-4">
        <div className="text-3xl "> 😀</div>

        <div>
          {" "}
          {postAnonymous ? (
            <div className="ml-5 text-sm  font-extrabold">익명</div>
          ) : (
            <div className="ml-5 font-extrabold">{`${commnetNickName}`}</div>
          )}
          <div className="ml-5 text-xs font-thin  ">{`${commentCreateAt}`}</div>
        </div>
      </div>
      <div className="mt-2 font-normal "> {`${commentContent}`}</div>
    </div>
  );
}
