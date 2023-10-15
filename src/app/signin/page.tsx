"use client";

import { loginUser } from "@/redux/thunkFunctions/userThunk";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    // 페이지에서 입력 한 값
    const body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body));
    reset(); //react-hook-form으로 입력후 입력값 초기화
  };

  const userEmail = {
    required: "필수 필드입니다.",
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };

  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div>
        <h1 className="text-5xl mb-2  ">로고</h1>
        <h1 className="text-xs font-bold">건물별 소통 해보세요.</h1>
        <h1 className="text-xs font-bold">
          중고거래와 공동 구매 더불어 친구까지
        </h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center">
            <label //입력 요소와 텍스트를 연결하는 데 사용 되는 label 태그
              htmlFor="email" //htmlFor 속성은 레이블이 연결된 입력 요소의 ID를 지정
              className="text-sm font-semibold text-gray-800"
            >
              이메일
            </label>
            <input
              placeholder="이메일을 입력해주세요."
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md" //px 외부 여백 py 내부 여백 상하좌우
              {...register("email", userEmail)} //register() 함수의 반환값은 객체이기 때문에 ... 사용 첫번째 인자는 type
            ></input>
            {errors?.email && (
              <div>
                <span className="text-red-500">{errors.email.message}</span>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-800"
            >
              비밀번호
            </label>
            <input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              id="pasword"
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md"
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
              className="w-full px-4 py-2 text-white duration-200 bg-black border  hover:bg-gray-700 "
            >
              로그인
            </button>
          </div>
        </form>

        <button className=" mt-1 w-full  px-4 py-2 font-bold  bg-yellow-300  border border-gray-100  hover:bg-yellow-200 rounded">
          3 초만에 카카오 로그인
        </button>
        <button className="mt-1 w-full  px-4 py-2 font-bold   bg-white border border-gray-100  hover:bg-gray-100 rounded">
          Sign Up with Google
        </button>
        <br />
        <small className="mt-2 flex justify-center text-sm">
          <Link href="/findemail" className="text-gray-300 mr-1 ">
            아이디 찾기
          </Link>

          <Link href="/findpassword" className="text-gray-300 ">
            | 비밀번호 찾기
          </Link>
        </small>

        <button className="mt-6 w-full  px-4 py-2  font-bold text-white bg-gray-300 border border-gray-300 rounded">
          <Link
            href="/signup/agreement"
            className=" t font-bold text-white  bg-gray-300 border border-gray-300 rounded"
          >
            회원가입
          </Link>
        </button>
      </div>
    </section>
  );
}
