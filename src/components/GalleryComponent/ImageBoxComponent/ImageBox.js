import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import { hideToUp } from '../../../action'
const ImageBox = styled.div`
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    cursor: pointer;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

export default ({ image, index }) => {

  const [span, setSpan] = new useState(0);
  const ref = useRef();
  const history = useHistory();
  const dispatch = new useDispatch()
  const setSpanEvent = () => {
    const height = ref.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpan(spans);
  }

  useEffect(() => {
    ref.current.addEventListener("load", setSpanEvent);

    return () => {
       ref.current.removeEventListener('load', setSpanEvent)
    }
  }, [span, setSpan]);
  return (
    <ImageBox style={{ gridRowEnd: `span ${span}` }}>
      <img
        ref={ref}
        src={image}
        alt="gallery"
        onClick={() => {
          dispatch(hideToUp())
          history.push(`/gallery/${index}`);
        }}
      />
    </ImageBox>
  );
};
