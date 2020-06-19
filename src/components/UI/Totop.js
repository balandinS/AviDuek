import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { hideToUp, displayToUp } from "../../action";

const toupAnimation = keyframes`
  from {
      transform: translateY(500px);
  }
  to {
      transform: translateY(0);
  }
`;

const ToTop = styled.div`
  animation-name: ${toupAnimation};
  animation-duration: 1s;
  
  display: ${({ visabilty }) => (visabilty ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 5px;
  height: 40px;
  width: 40px;
  margin: 0 0 10px 10px;
  z-index: 99;
  button {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    color: whitesmoke;
    border: 1px solid #a25f4b;
    background-color: #a25f4b;
    outline: none;
  }
`;
export default () => {
  const visabiltyToUpElemnt = useSelector((state) => state.toUpElemnt);
  const dispatch = new useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        dispatch(displayToUp());
      } else {
        dispatch(hideToUp());
      }
    });
  }, []);
  return (
    <ToTop visabilty={visabiltyToUpElemnt}>
      <button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <FontAwesomeIcon
          icon={"angle-up"}
          color="whitesmoke"
          size="2x"
        />
      </button>
    </ToTop>
  );
};
