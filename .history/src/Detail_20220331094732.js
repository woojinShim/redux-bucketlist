// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const index = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list);
  console.log(bucket_list[index]);

  console.log(index);
  return <h1>상세 페이지입니다!</h1>;
};

export default Detail;
