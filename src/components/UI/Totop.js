import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 5px;
  height: 40px;
  width: 40px;
  margin: 0 0 10px 10px;
  z-index:99;
  button{
      border-radius: 50%;
      height: 100%;
      width:100%;
      color: whitesmoke;
      border: 1px solid #a25f4b;
      background-color: #a25f4b;
      outline: none;
  }
`;
export default () => {
  return (
    <ToTop>
      <button onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }}>
        <FontAwesomeIcon icon={['far', 'arrow-alt-circle-up']} color="whitesmoke"/>
      </button>
    </ToTop>
  );
};
