import React from "react";

export default function PostItem({ dpost }) {
  return (
    <div className="border-b p-3">
      <p className="font-bold">{dpost.postTitle} </p>
      <p>{dpost.postContent} </p>
      <p>{dpost.postLike}</p>
    </div>
  );
}
