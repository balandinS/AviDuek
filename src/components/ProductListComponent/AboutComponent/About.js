import React, { useState } from "react";
import styled from "styled-components";

const AboutStyled = styled.div`
    display: flex;
    direction: rtl;
    flex-direction: column;
    padding: 0;
    margin: 0 auto 10px auto;
    width: 85%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
  a {
    color: #a25f4b;
  }
  ul{
    margin: 10px 0 0 0;
  }
  p {
    margin: 5px 0 5px 0;
    color: #7f8c8d;
  }
  li {
    color: #7f8c8d;
  }
`;
export default (props) => {
  const [tastes] = useState([
    "מריר",
    "חלבי ולבן",
    "ממולא בקוקוס",
    "מרציפן",
    "חמאת בוטנים",
    "ועוד טעמים שונים",
  ]);

  const renderTastes = () =>
    tastes.map((tatse, index) => <li key={index}>{tatse}</li>);
  return (
    <AboutStyled>
      <h1>אודות העסק</h1>
      <p>פרלינים משובחים בעבודת יד.</p>
      <p>שוקולד מובחר במגוון טעמים</p>
      <ul>{renderTastes()}</ul>
      <p>
        להזמנות דואק אבי פאלאפון:
        <span style={{ color: "#a25f4b" }}> 0537719007 </span>
      </p>
      <a rel="noopener noreferrer" href="https://m.facebook.com/story.php?story_fbid=154771589368390&id=104758734369676" target="_blank">קישור לעמוד עסקי בפייסבוק</a>
    </AboutStyled>
  );
};
