import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Top from './components/pages/Top';
import Users from './components/pages/Users';
import User from './components/pages/User';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Tos from './components/pages/Tos';
import { State } from './store';
import { addUser, deleteUser } from './actions';
// import connector from './containers/userContainer';
import { initialUser } from './utils/constant/text/body/user/text';
import { ROUTE, INFOROUTE } from './utils/constant/route';
// import Modal from './container/ModalContainer';
import { BASICCOLORS } from './utils/constant/color';

import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fas, far, fab);

// type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {}
const Container = styled.div`
  width: 100%;
`;
const num = 1;
const URL =
  'https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4';

const App: React.FC<Props> = () => {
  const currentUser = useSelector((state: State) => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUser(initialUser));
  }, []);

  return (
    <Container>
      <div onClick={() => dispatch(addUser(initialUser))}>add</div>
      <div onClick={() => dispatch(deleteUser())}>delete</div>
      <Router>
        <Route exact path={ROUTE.TOP} render={() => <Top currentUser={currentUser} />} />
        <Route exact path={ROUTE.USERS} render={() => <Users currentUser={currentUser} />} />
        <Route exact path={`/users/${num}`} render={() => <User currentUser={currentUser} />} />
        <Route
          exact
          path={INFOROUTE.CONTACT}
          render={() => <Contact currentUser={currentUser} />}
        />
        <Route exact path={INFOROUTE.ABOUT} render={() => <About currentUser={currentUser} />} />
        <Route
          exact
          path={INFOROUTE.PRIVACY}
          render={() => <Privacy currentUser={currentUser} />}
        />
        <Route exact path={INFOROUTE.TOS} render={() => <Tos currentUser={currentUser} />} />
      </Router>
    </Container>
  );
};

export default App;
