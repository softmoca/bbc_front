/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  authUser,
  getUserData,
  porfileChange,
} from "@/redux/thunkFunctions/userThunk";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone";
import axiosInstance from "@/utils/axios";
import { toast } from "react-toastify";

export default function page() {
  const postNamePath = usePathname();
  const userId = postNamePath.substring(9);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData()); //thucnk 함수 이름은 authUser
  }, []); // 권한이 바뀌거나 or url경로가 바뀌거나

  const userData = useSelector((state) => state.persistedReducer.user.userData);
  //console.log(userData);

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

      setUserImage([response.data.path]);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = ({ nickName }) => {
    // 페이지에서 입력 한 값
    const body: { nickName?: string; images?: string[] } = {};

    if (nickName) {
      body.nickName = nickName;
    }

    if (userImage.length > 0) {
      body.images = userImage;
    }

    console.log(nickName);

    if (!body.nickName && (!body.images || body.images.length === 0)) {
      toast.error("변경사항이 없습니다.");
      return; // 아무 작업도 하지 않고 함수 종료
    }

    dispatch(porfileChange(body));
    setUserImage([]);
    reset(); //react-hook-form으로 입력후 입력값 초기화
  };

  console.log(userData);

  const userNickName = {
    minLength: {
      value: 3,
      message: "최소 3자입니다.",
    },
  };
  return (
    <div>
      <div>
        {userData.images.length > 0 ? (
          <img
            className="min-w-[100px] h-[100px]"
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/public/users/${
              userData.images.slice(-1)[0]?.path
            }`}
            alt="image"
          />
        ) : (
          <img
            src={gravatar.url(userData.email, { s: "100px", d: "mm" })}
            alt={userData.nickName}
          />
        )}

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
              htmlFor="nickName"
              className="text-2xl font-bold font-semibold text-gray-800 "
            >
              프로필 변경하기
            </label>
            <input
              placeholder={userData.nickName}
              type="nickName"
              id="nickName"
              className="w-full px-4 py-2 mt-2 border bg-white rounded-md"
              {...register("nickName", userNickName)}
            ></input>
            {errors?.nickName && ( //? 는 옵셔널 체크 연산자, password 라는 속성이 없으면 undefined
              <div>
                <span className="text-red-500">{errors.nickName.message}</span>
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
