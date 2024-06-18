/* eslint-disable @next/next/no-img-element */
import React from "react";
import axiosInstance from "@/utils/axios";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

export default function CommentItem({ dcomment }: any) {
  const commentId = dcomment.id;
  const postNamePath = usePathname();

  const postId = postNamePath.slice(5, 8);
  console.log(postId);

  const commnetNickName = dcomment?.author?.nickName;

  const commentContent = dcomment?.comment;

  const createdAt = dcomment?.createdAt;
  const month_day = createdAt?.slice(5, 10).replace("-", "/");
  const hour_minute = createdAt?.slice(11, 16);

  const handleButtonDeleteClick = async () => {
    try {
      const response = await axiosInstance.delete(
        `http://52.78.34.195:3333/post/${postId}/comment/${commentId}/` //백엔드 api url
      );
      toast.info("댓글이 성공적으로 삭제되었습니다 !");

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("에러 발생:", error);
      toast.error("본인이 작성한 댓글만 삭제할 수 있습니다!");
    }
  };

  return (
    <div className="border-b rounded mb-2">
      <div className="flex mt-2">
        <div className="border-2 rounded-xl">
          <img
            className="w-[40px] h-[30px] rounded-full"
            src={"http://52.78.34.195:3333/public/userProfileDefault.png"}
            alt="익명 사용자"
          />
        </div>

        <div className="flex flex-grow items-center justify-between">
          <div>
            <div className="ml-3 text-sm font-extrabold">{commnetNickName}</div>
            <div className="ml-3 text-xs text-gray-300">
              {month_day} {hour_minute}
            </div>
          </div>
          <button
            onClick={handleButtonDeleteClick}
            className="text-white duration-200 bg-black hover:bg-gray-700 rounded"
          >
            삭제하기
          </button>
        </div>
      </div>
      <div className="mt-2 ml-2 font-normal">{commentContent}</div>
    </div>
  );
}
