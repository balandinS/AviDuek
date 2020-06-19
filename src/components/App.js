import React from "react";
import styled from "styled-components";
import Footer from "./FooterComponent/Footer";
import Haeder from "./HeaderComponent/Header";
import Main from "../RouterMain/Main";
import ModalMain from "../RouterMain/ModalMain";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faAngleUp, faTimes} from '@fortawesome/free-solid-svg-icons'
import Totop from "./UI/Totop";
library.add(fab, faFacebook, faInstagram, faAngleUp, faTimes);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .main {
    flex: 1 0 auto;
  }
`;

export default function App() {
  return (
    <Content>
      <div className="main">
        <Haeder />
        <Main />
        <ModalMain />
        <Totop />
      </div>
      <Footer />
    </Content>
  );
}
