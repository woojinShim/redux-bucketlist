// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list);
  console.log(bucket_index);
  console.log(bucket_list[bucket_index]);

  return <h1>상세 페이지입니다!</h1>;
};

export default Detail;
