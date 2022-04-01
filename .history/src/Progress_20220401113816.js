import React from "react";
import styled from "styled-components";

const Progress = (props) => {
  return (
    <ProgressBar>
      <HighLight />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 40px;
`;

const HighLight = styled.div`
  background: orange;
  width: 50%;
  height: 40px;
`;

export default Progress;
