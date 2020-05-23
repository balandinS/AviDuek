import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
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
  useEffect(() => {
    ref.current.addEventListener("load", () => {
      const height = ref.current.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpan(spans);
    });
  }, [span, setSpan]);
  return (
    <ImageBox style={{ gridRowEnd: `span ${span}` }}>
      <img
        ref={ref}
        src={image}
        alt="gallery"
        onClick={() => {
          history.push(`/gallery/${index}`);
        }}
      />
    </ImageBox>
  );
};
