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
    font-size: 1.2em;
  }
  h2{
    a {
      color:  #a25f4b;
      text-decoration: none;
      font-size: 1.2em;
    }
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
          <h2><a href="tel:0537719007" >0537719007</a></h2>
          <p>ימי ראשון - חמישי 10:00-20:00</p>
          <p>יום שישי 09:00-14:00</p>
          <a rel="noopener noreferrer" href="https://www.facebook.com/%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%98%D7%94-%D7%93%D7%95%D7%90%D7%A7-%D7%90%D7%91%D7%99-104758734369676/" target="_blank">
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
