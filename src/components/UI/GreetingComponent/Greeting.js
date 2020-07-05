import React from "react";
import styled from "styled-components";
import { translateRight, translatedown } from "./animation";
const Greeting = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  font-family: "Varela Round", sans-serif;
  margin: 0px auto 0px auto;
  width: 70%;
  min-height: 350px;
  height: 350px;
  color: whitesmoke;
  background-image: url("https://images.pexels.com/photos/434252/pexels-photo-434252.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    height: 50px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 10px 0;
    animation-name: ${translateRight};
    animation-duration: 2s;
    font-size: 1.2em;
  }
  .body {
    height: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
    animation-name: ${translateRight};
    animation-duration: 2s;
    font-size: 1.2em;
  }
  div {
    display: inline-block;
    padding: 10px 20px;
    font-size: 12px;
    text-align: center;
    color: #1d1f2e;
    font-weight: bold;
    animation-name: ${translatedown};
    animation-duration: 3s;
    margin: 0;
    border-radius: 10%;
    translate: all;
    height: auto;
    p{
      font-size: 1.2em;
    }
  }

  @media (max-width: 863px) {
    h1 {
      font-size: 25px;
      height: 25px;
    }
  }
`;

export default ({ page }) => {
  return (
    <Greeting>
      <h1> שוקולטה דואק אבי </h1>
      <p className="body">כאן ניתן למצוא כל סוגי שוקולד</p>
      <div>
        <p>{page}</p>
      </div>
    </Greeting>
  );
};
