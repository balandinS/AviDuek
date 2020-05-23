import React from "react";
import styled from "styled-components";
import Navbar from "./NavbarComponent/Navbar";
const HeaderContainer = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto 0px auto;
  padding: 25px 0px 25px 0px;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  );
}
