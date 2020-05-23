import React from "react";
import styled from "styled-components";
import Hamburger from './HamburgerComponent/Hamburger'
const BrandConatiner = styled.div`
  width: 25%;
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
const BrandLink = styled.a`
  font-size: 1.3rem;
  color: #a25f4b;
  text-decoration: none;
`;
export default function Brand(props) {
  return (
 
      <BrandConatiner>
        <BrandLink>
           {props.brand} 
        </BrandLink>
        <Hamburger />
      </BrandConatiner>

  );
}
