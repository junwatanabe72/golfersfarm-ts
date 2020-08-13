import React,{useState} from 'react';
import styled from 'styled-components';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Top from "./components/pages/Top";
import Users from "./components/pages/Users";
import User from "./components/pages/User";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Tos from './components/pages/Tos';
import { ROUTE, INFOROUTE } from "./utils/constant/route"
// import Modal from './container/ModalContainer';
import { BASICCOLORS } from "./utils/constant/color"
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fas,far,fab);

const Container = styled.div`
  width: 100%;
`;
const num =1;
const URL ="https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"


const App: React.FC =()=>{
  const [login, setLogin] = useState<boolean>(false);

  const changedStatus = () => {
    setLogin(!login);
  };
  return (
    <Container>
        <Router>
          <Route exact path={ROUTE.TOP} render={()=> <Top login={login}/> } />
          <Route exact path={ROUTE.USERS} render={() => <Users login={login} />} />
          <Route exact path={`/users/${num}`} render={() => <User login={login} />} />
          <Route exact path={INFOROUTE.CONTACT} render={() => <Contact login={login} />} />
          <Route exact path={INFOROUTE.ABOUT} render={() => <About login={login} />} />
          <Route exact path={INFOROUTE.PRIVACY} render={() => <Privacy login={login} />} />
          <Route exact path={INFOROUTE.TOS} render={() => <Tos login={login} />} />
        </Router>
    </Container>
  );
}

export default App;
