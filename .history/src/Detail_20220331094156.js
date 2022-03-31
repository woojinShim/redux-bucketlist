// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const index = useParams();

  console.log(index);
  return <h1>상세 페이지입니다!</h1>;
};

export default Detail;
