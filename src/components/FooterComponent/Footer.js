import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  flex-shrink: 0;
  height: 30px;
  width: 100%;
  color: whitesmoke;
  background-color: black;
  text-align: center;
`
const Copyrigth = styled.p`
 margin: 0;
 padding: 0;
`
export default function FooterComponent() {
  return (
    <Footer>
      <Copyrigth>frontend developer Sergey Balandin</Copyrigth>
    </Footer>
  );
}
