"use client";
import Link from "next/link";
import React, { useState } from "react";
import InputGroup from "../components/InputGroup";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  return (
    <div>
      <h1 className="text-xl mb-2  ">로고</h1>
      <h1 className="text-xs">건물별 소통 해보세요.</h1>
      <h1 className="text-xs">중고거래와 공동 구매 더불어 친구까지</h1>
      <form>
        <h1 className="text-mb-1 mb-2 font-bold ">이메일</h1>
        <InputGroup
          placeholder="이메일을 입력해주세요."
          value={email}
          setValue={setEmail}
          error={errors.email}
        />
        <h1 className="text-mb-1 mb-2 font-bold ">비밀번호</h1>
        <InputGroup
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          setValue={setPassword}
          error={errors.password}
        />

        <button className="w-11/12 py-1 mb-1 text-xs font-bold text-white bg-gray-300 border border-gray-300 rounded">
          로그인
        </button>
      </form>
      <button className="w-11/12 py-1 mb-1 text-xs font-bold  bg-yellow-300  border border-gray-100 rounded">
        3 초만에 카카오 로그인
      </button>
      <button className="w-11/12 py-1 mb-1 text-xs font-bold  bg-white border border-gray-100 rounded">
        Sign Up with Google
      </button>
      <br />
      <small>
        <Link href="/findemail" className="text-gray-200 text-xs">
          아이디 찾기{"  "}
        </Link>
        <Link href="/findpassword" className="text-gray-200 text-xs">
          | 비밀번호 찾기
        </Link>
      </small>

      <button className="w-11/12 py-1 mb-1 text-xs font-bold text-white bg-gray-300 border border-gray-300 rounded">
        <Link
          href="/signup/agreement"
          className=" text-xs  font-bold text-white  bg-gray-300 border border-gray-300 rounded"
        >
          회원가입
        </Link>
      </button>
    </div>
  );
}
