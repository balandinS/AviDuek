import React from "react";
import {useSelector ,useDispatch} from 'react-redux'
import styled from "styled-components";
import { toggleMenuBar } from '../../../../../action'
const StyledBurger = styled.div`
  display: none;
  border-radius: 50%;
  margin: 0;
  width: 3rem;
  height: 3rem;
  padding: 10px;
  transition: 0.7s all;

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.20rem;
    background-color: #a25f4b;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(38deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-38deg)" : "rotate(0)")};
    }
  }
`;

export default function Hamburger() {
  const dispatch =  useDispatch()
  const open = useSelector(state => state.menuBarIsOpen);
  return (
    <React.Fragment>
      <StyledBurger open={open} onClick={() => dispatch(toggleMenuBar())}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </React.Fragment>
  );
}
