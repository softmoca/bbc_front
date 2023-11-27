/* eslint-disable @next/next/no-img-element */
"use client";

import { registerUser } from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password, nickName, university }) => {
    // 페이지에서 입력 한 값
    const body = {
      email: email,
      password: password,
      nickName: nickName,
      university: university,
    };

    dispatch(registerUser(body));
    reset(); //react-hook-form으로 입력후 입력값 초기화
  };

  const userEmail = {
    required: "필수 필드입니다.",
  };
  const usernickName = {
    required: "필수 필드입니다.",
  };
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };
  const useruniversity = {
    required: "필수 필드입니다.",
  };

  return (
    // flex-col 자식요소 수직 , max-w-[400px] 최대 너비 제한   m-auto 좌우 여백을 자동으로 설정

    <section className="flex flex-col justify-center mt-5 max-w-[400px] m-auto">
      <div className=" bg-white rounded-md board">
        <img
          className="mx-auto my-2 w-40 h-15"
          style={{ marginBottom: "3rem" }}
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/BBC_logo.png`}
          alt="BBC 로고"
        />

        <div className="ml-10 mb-5">
          <h1 className="text-lg">
            <span className="font-bold">건물별 소통</span>해보세요.
          </h1>

          <h1 className="text-lg ">
            <span className="font-bold">중고거래</span>와{" "}
            <span className="font-bold">공동구매</span> 더불어{" "}
            <span className="font-bold">친구</span>까지
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-1 font-semibold ">대학교</h1>
          <select
            id="university"
            className="  border mb-3 border-gray-300 rounded "
            {...register("university", useruniversity)}
          >
            <option value="광운대학교">광운대학교</option>
            <option value="영철대학교">영철대학교</option>
            <option value="모카대학교">모카대학교</option>
            <option value="서울대학교">서울대학교</option>
            <option value="연세대학교">연세대학교</option>
            <option value="고려대학교">고려대학교</option>
            <option value="하버드대학교">하버드대학교</option>
            <option value="스텐퍼드대학교">스텐퍼드대학교</option>
          </select>

          <div className="mb-3">
            <label htmlFor="name" className="font-semibold  text-gray-800">
              닉네임
            </label>
            <input
              placeholder="닉네임을 입력해주세요."
              type="nickName"
              id="nickName"
              className="w-full px-4 py-2 mt-1 border bg-white rounded-md"
              {...register("nickName", usernickName)}
            ></input>
            {errors?.name && (
              <div>
                <span className="text-red-500">{errors.name.message}</span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label //입력 요소와 텍스트를 연결하는 데 사용 되는 label 태그
              htmlFor="email" //htmlFor 속성은 레이블이 연결된 입력 요소의 ID를 지정
              className=" font-semibold text-gray-800"
            >
              이메일
            </label>
            <input
              placeholder="이메일을 입력해주세요."
              type="email"
              id="email"
              className="w-full px-4 py-2  mt-1 border bg-white rounded-md" //px 외부 여백 py 내부 여백 상하좌우
              {...register("email", userEmail)} //register() 함수의 반환값은 객체이기 때문에 ... 사용 첫번째 인자는 type
            ></input>
            {errors?.email && (
              <div>
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="font-semibold text-gray-800">
              비밀번호
            </label>
            <input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              id="pasword"
              className="w-full px-4 py-2 mt-1 border bg-white rounded-md"
              {...register("password", userPassword)}
            ></input>
            {errors?.password && ( //? 는 옵셔널 체크 연산자, password 라는 속성이 없으면 undefined
              <div>
                <span className="text-red-500">{errors.password.message}</span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit" //duration hover시 색상 애니이션 지속시간
              className="w-full px-4 py-2 text-white duration-200 bg-black  hover:bg-gray-700 "
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
