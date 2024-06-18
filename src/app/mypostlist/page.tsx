/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import MyPostItem from "@/components/mypostItem";

import axiosInstance from "@/utils/axios";
import React, { useEffect, useState } from "react";

export default function MyPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(
          `http://52.78.34.195:3333/post/getMyPost` //백엔드 api url
        );
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.error("게시글을 불러오는 데 실패했습니다.", error);
      }
    };

    fetchPosts();
  }, []);
  // console.log(posts);

  return (
    <section className="m-3 ">
      <div className=" text-xl font-bold flex  justify-between items-center">
        <div></div>
        <h1 className="text-xl font-bold">{`나의 게시글`} </h1>
        <button type="submit">🔍 </button>
      </div>

      <img
        className=" my-2 w-full mb-3 rounded"
        src={"http://52.78.34.195:3333/public/advertist_example.png"}
        alt="광고 예제"
      />

      <div>
        {posts.map((dpost, index) => (
          <MyPostItem dpost={dpost} key={index} />
        ))}
      </div>
    </section>
  );
}
