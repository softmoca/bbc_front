/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { authUser, getUserData } from "@/redux/thunkFunctions/userThunk";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone";
import axiosInstance from "@/utils/axios";

export default function page() {
  const postNamePath = usePathname();
  const postId = postNamePath.substring(9);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  const userData = useSelector((state) => state.persistedReducer.user.userData);

  console.log(userData);
  const [userImage, setUserImage] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const handleDrop = async (files) => {
    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" }, // 헤더에 타입 명시
    };

    formData.append("image", files[0]); //file이라는 키와 files(파일들의 정보 객체) 값을 추가

    try {
      // 백엔드에서 위에서 생성한 config와 formdata 보내기
      const response = await axiosInstance.post(
        "/common/image",
        formData,
        config
      );

      console.log(response).data.path;

      setUserImage([response.data.path]);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = ({ password }) => {
    // 페이지에서 입력 한 값
    const body = {
      password: password,
    };

    dispatch(registerUser(body));
    reset(); //react-hook-form으로 입력후 입력값 초기화
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };

  return (
    <div>
      <div>
        <img
          src={gravatar.url(userData.email, { s: "100px", d: "mm" })}
          alt={userData.nickName}
        />

        <div className="flex">
          {" "}
          <Dropzone onDrop={handleDrop}>
            {(
              { getRootProps, getInputProps } //Dropzone 에서 가져온 인자들
            ) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>📷</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div>
          {userImage.length > 0 && (
            <img
              className="min-w-[100px] h-[100px]"
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/temp/${userImage}`}
              alt="image"
            />
          )}
        </div>
      </div>

      <div className="mt-10">
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="password"
              className="text-2xl font-bold font-semibold text-gray-800 "
            >
              프로필 변경하기
            </label>
            <input
              placeholder={userData.nickName}
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
              프로필 변경하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
