import React from "react";
import styled from "styled-components";
import Brand from './LinksComponent/Brand'
import Link from './LinksComponent/Link';
const NavbarContainer = styled.nav`
direction: rtl;
transition: 0.7s all;
display: flex;
justify-content: space-around;
align-items: baseline;
width: 70%;
margin: 2px 0px 2px 0px;
overflow: hidden;
@media (max-width: 700px) {
 
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
}
`
export default function Navbar() {
  return (
      <NavbarContainer>
        <Brand brand="שוקולטה דואק אבי" />
        <Link link="עמוד הבית" path="/"/>
        <Link link="גלריה" path="/gallery"/>
      </NavbarContainer>
  );
}
