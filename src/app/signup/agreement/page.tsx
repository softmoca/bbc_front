import Link from "next/link";
import React from "react";

export default function Agreement() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2  ">약관동의 </h1>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 border-gray-200 rounded "
        />
        <label className="sm text-xs font-bold text-black">
          아래 약관에 모두 동의 합니다
        </label>
      </div>
      <div className="flex items-center mt-4 mb-2">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 border-gray-200 rounded "
        />
        <label className="sm text-xs  text-gray-900">
          서비스 이용약관 동의(필수)
        </label>
      </div>
      <div className="w-11/12 rounded  text-xs bg-gray-200">
        <ol>
          <li>최영철의 말을 잘 따를 것을 동의합니다.</li>
          <li>최영철의 말을 잘 따를 것을 동의합니다.</li>
          <li>최영철의 말을 잘 따를 것을 동의합니다.</li>
          <li>최영철의 말을 잘 따를 것을 동의합니다.</li>
        </ol>
      </div>
      <div className="flex items-center mt-4 mb-2">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 border-gray-200 rounded "
        />
        <label className="sm text-xs  text-gray-900">
          서비스 이용약관 동의(필수)
        </label>
      </div>
      <div className="w-11/12 rounded  text-xs bg-gray-200">
        <ol>
          <li>최영철의 인품이 대단 하다고 동의합니다.</li>
          <li>최영철의 인품이 대단 하다고 동의합니다.</li>
          <li>최영철의 인품이 대단 하다고 동의합니다.</li>
          <li>최영철의 인품이 대단 하다고 동의합니다.</li>
        </ol>
      </div>

      <div className="flex items-center mt-4 mb-2">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 border-gray-200 rounded "
        />
        <label className="sm text-xs  text-gray-900">
          서비스 이용약관 동의(필수)
        </label>
      </div>
      <div className="w-11/12 rounded  text-xs bg-gray-200">
        <ol>
          <li>
            bbc는 국내 대학생들을 위한 서비스이며, 본인인증을 통해 만 14세
            이상만 가입할 수 있습니다.
          </li>
        </ol>
      </div>
      <button className="w-11/12 py-1 mb-1 text-xs font-bold text-white  bg-red-500   border-gray-100 rounded">
        휴대폰 인증
      </button>
      <button className="w-11/12 py-1 mb-1 text-xs font-bold text-white bg-gray-300 border border-gray-300 rounded">
        <Link
          href="/signup"
          className=" text-xs  font-bold text-white  bg-gray-300 border border-gray-300 rounded"
        >
          회원가입
        </Link>
      </button>
    </div>
  );
}
