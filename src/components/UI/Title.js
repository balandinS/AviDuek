import React from "react";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 10px;
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  div{
    width: 30px;
    height: 1px;
    background-color: #bdc3c7;
  }
  p{
    margin: 0 15px ;
    color: #7f8c8d;
  }
`;
export default ({ title }) => {
  return (
    <Title>
      <div></div>
      <p>{title}</p>
      <div></div>
    </Title>
  );
};
