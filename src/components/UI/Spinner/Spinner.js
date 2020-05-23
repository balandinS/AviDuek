import React from 'react'
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`
const Spinner = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div{
      height: 40px;
      width: 40px;
      animation-name: ${rotateAnimation};
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      border: 3px solid #7f8c8d;
      border-right: 3px solid #a25f4b;
      border-radius: 50%;
      transition: 1s all;
  }
`
export default () =>  {
    return (
        <Spinner>
             <div />
        </Spinner>
    )
}
