import React from 'react';
import styled from 'styled-components';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Header from './components/templates/Header';
import Body from './components/templates/Body';
// import Modal from './container/ModalContainer';
import { defaultColors } from "./utils/constant/color"
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fas,far,fab);

const Container = styled.div`
  width: 100%;
`;

const URL ="https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"
const App: React.FC =()=>{
  return (
    <Container>
        <Router>
        <Header headerColor={defaultColors.BASICCOLORS.white}/>
        <Body bodyColor={defaultColors.BASICCOLORS.whiteLight} />
        </Router>
    </Container>
  );
}

export default App;
