"use client";
import { registerUser } from "@/redux/features/userSlice";
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

  const onSubmit = ({ email, password, nickName }) => {
    // 페이지에서 입력 한 값
    const body = {
      email: email,
      password: password,
      nickName: nickName,
      //university: `https://via.placeholder.com/600x400?text=no+user+image`,
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

  return (
    // flex-col 자식요소 수직 , max-w-[400px] 최대 너비 제한   m-auto 좌우 여백을 자동으로 설정

    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6  bg-white rounded-md shadow-md">
        <h1 className="text-xl mb-2  ">로고</h1>
        <h1 className="text-xs">건물별 소통 해보세요.</h1>
        <h1 className="text-xs mb-5">중고거래와 공동 구매 더불어 친구까지</h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="mb-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="nickName"
              id="nickName"
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md"
              {...register("nickName", usernickName)}
            ></input>
            {errors?.name && (
              <div>
                <span className="text-red-500">{errors.name.message}</span>
              </div>
            )}
          </div>

          <div>
            <label //입력 요소와 텍스트를 연결하는 데 사용 되는 label 태그
              htmlFor="email" //htmlFor 속성은 레이블이 연결된 입력 요소의 ID를 지정
              className="text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
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
              Password
            </label>
            <input
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
              className="w-full px-4 py-2 text-white duration-200 bg-black  hover:bg-gray-700 "
            >
              회원가입
            </button>
          </div>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            아이디가 있다면?{" "}
            <a href="/login" className="font-medium hover:underline">
              로그인
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
