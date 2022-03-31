// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // useDispatch는 데이터를 업데이트할 때, useSelector는 데이터를 가져올 때 쓴다.

const BucketList = (props) => {
  let history = useHistory();
  //   console.log(props);
  //   const my_lists = props.list;
  const my_lists = useSelector((state) => state.bucket.list);

  return null;
  //   return (
  //     <ListStyle>
  //       {my_lists.map((list, index) => {
  //         return (
  //           <ItemStyle
  //             className="list_item"
  //             key={index}
  //             onClick={() => {
  //               history.push("/detail");
  //             }}
  //           >
  //             {list}
  //           </ItemStyle>
  //         );
  //       })}
  //     </ListStyle>
  //   );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
