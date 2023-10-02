"use client";
import React, { useState } from "react";
import InputGroup from "../components/InputGroup";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errors, setErrors] = useState<any>({});

  return (
    <div>
      <h1 className="text-xl mb-2  ">로고</h1>
      <h1 className="text-xs">건물별 소통 해보세요.</h1>
      <h1 className="text-xs mb-5">중고거래와 공동 구매 더불어 친구까지</h1>

      <form>
        <h1 className="text-mb-1 mb-1 font-bold ">대학교</h1>
        <select className="  border border-gray-300 rounded ">
          <option disabled>대학교 선택</option>

          <option value="광운대학교">광운대학교</option>
          <option value="영철대학교">영철대학교</option>
          <option value="모카대학교">모카대학교</option>
          <option value="서울대학교">서울대학교</option>
          <option value="연세대학교">연세대학교</option>
          <option value="고려대학교">고려대학교</option>
          <option value="하버드대학교">하버드대학교</option>
          <option value="스텐퍼드대학교">스텐퍼드대학교</option>
        </select>

        <h1 className="text-mb-1 mb-1 font-bold ">닉네임</h1>
        <InputGroup
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          setValue={setNickname}
          error={errors.nickname}
        />
        <h1 className="text-mb-1 mb-1 font-bold ">이메일</h1>
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
        <h1 className="text-mb-1 mb-2 font-bold ">비밀번호 확인</h1>
        <InputGroup
          placeholder="비밀번호를 다시 입력해 주세요"
          value={passwordCheck}
          setValue={setPasswordCheck}
          error={errors.passwordCheck}
        />

        <button className="w-11/12 py-1 mb-1 text-xs font-bold text-white bg-gray-400 border border-gray-300 rounded">
          <Link
            href="/signup/congratulate"
            className=" text-xs  font-bold text-white "
          >
            가입하기
          </Link>
        </button>
      </form>
    </div>
  );
}
