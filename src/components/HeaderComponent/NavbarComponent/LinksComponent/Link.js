import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import { resetPositionElement } from '../../../../action'

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #b3b7b9;
  &:hover {
    border-bottom: 2px solid orange;
    color: #1d1f2e; 
    transition: .5s all;
  }
  &.active{
      text-decoration: none;
      color: #1d1f2e;
      border-bottom: 2px solid #1d1f2e;
    }
    &.active:hover{
        border-bottom: 2px solid orange;
    }
    @media (max-width: 700px) {
       display: ${({ open }) => (open ? "block" : "none")};
    }
`;
export default function Link({ link, path }) {
  const open = useSelector(state => state.menuBarIsOpen);
  
  const dispatch = new useDispatch()
  return <LinkStyled open={open} exact activeClassName="active" to={path}  onClick={() =>  {
    dispatch(resetPositionElement())
  }}>{link}</LinkStyled>;
}
