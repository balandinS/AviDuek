import React from "react";
import styled from "styled-components";

const ParalaxStyled = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
  div {
    margin-top: 100px;
    background-image: url("https://images.pexels.com/photos/1474264/pexels-photo-1474264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 100%;
    width: 100%;
  }
`;
export default function Paralax() {
  return (
    <ParalaxStyled>
      <div></div>
    </ParalaxStyled>
  );
}
