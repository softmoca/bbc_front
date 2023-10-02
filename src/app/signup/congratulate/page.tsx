import Link from "next/link";
import React from "react";

export default function Congratulate() {
  return (
    <div>
      <h1 className="text-xl mb-2  ">로고</h1>
      <h1 className="text-xs">건물별 소통 해보세요.</h1>
      <h1 className="text-xs">중고거래와 공동 구매 더불어 친구까지</h1>
      <h1 className="text-xl mb-2  ">축하사진</h1>
      <h1 className="text-xl mb-2 font-bold  ">
        서비스 가입 신청이 완료 되었습니다.
      </h1>

      <button className="w-11/12 py-1 mb-1 text-xs font-bold text-white bg-gray-300 border border-gray-300 rounded">
        <Link
          href="/signin"
          className=" text-xs  font-bold text-white  bg-gray-300 border border-gray-300 rounded"
        >
          로그인
        </Link>
      </button>
    </div>
  );
}
