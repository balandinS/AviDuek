import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Contact = styled.section`
  width: 100%;
  direction: rtl;
  display: flex;
  margin: 10px 0 50px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  p{
    color: #7f8c8d;
    
  }
  h2{
      color:  #a25f4b;
  }
 .container-icon{
      cursor: pointer;
      margin-right: 10px;
      transition: .3s all;
  }
  .container-icon:hover{
      transform: scale(1.1);
  }
`;
export default () => {
  return (
    <Contact>
      <div>
        <div>
          <p> להזמנות דואק אבי פאלאפון</p>
          <h2>0537719007</h2>
          <p>ימי ראשון - חמישי 10:00-20:00</p>
          <p>יום שישי 09:00-14:00</p>
          <a rel="noopener noreferrer" href="https://m.facebook.com/story.php?story_fbid=154771589368390&id=104758734369676" target="_blank">
            <FontAwesomeIcon className="container-icon" icon={["fab", "facebook"]}  size="4x" color="#a25f4b"/>
          </a>
          <a rel="noopener noreferrer" href="https://instagram.com/chocolate_douak_avi?igshid=c3n9f28cl095" target="_blank">
            <FontAwesomeIcon className="container-icon" icon={["fab", "instagram"]} size="4x"  color="#a25f4b"/>
          </a>
        </div>
      </div>
    </Contact>
  );
};
