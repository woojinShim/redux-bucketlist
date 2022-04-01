// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteBucket, updateBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list);
  console.log(bucket_index);
  console.log(bucket_list[bucket_index]);

  return (
    <>
      <h1>{bucket_list[bucket_index].text}</h1>
      <button
        onClick={() => {
          dispatch(updateBucket(bucket_index));
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          dispatch(deleteBucket(bucket_index));
          history.goBack();
        }}
      >
        삭제하기
      </button>
    </>
  );
};

export default Detail;
