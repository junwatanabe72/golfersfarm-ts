import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import Top from './components/pages/Top';
import Users from './components/pages/Users';
import User from './components/pages/User';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Tos from './components/pages/Tos';
import Login from './components/pages/Login';
import LogOut from './components/pages/LogOut';
import SignUp from './components/pages/SignUp';
import { getUsers, addTypes, addShafts, addMakers, createUser, loginUser } from './actions';
import { allTypes, shafts, makers } from './utils/constant/text/body/user/value';
import { ROUTE, INFOROUTE } from './utils/constant/route';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
import { State } from './@type/store';
import { initialValuesDataType } from './@type/components/signupPage';

library.add(fas, far, fab);

interface Props {}
const Container = styled.div`
  width: 100%;
`;

const App: React.FC<Props> = ({}) => {
  const currentUser = useSelector((state: State) => state.CurrentUser);
  const allUsers = useSelector((state: State) => state.Users);
  const clubTypes = useSelector((state: State) => state.Types);
  const allShafts = useSelector((state: State) => state.Shafts);
  const Makers = useSelector((state: State) => state.Maker);
  const storeClubs = useSelector((state: State) => state.Clubs);
  const dispatch = useDispatch();
  const existedCurrentUser = 0 !== Object.keys(currentUser).length;

  const onSubmit = (values: initialValuesDataType) => {
    if ('name' in values) {
      const { name, password, email } = values;
      const signItems = { name, password, email };
      dispatch(createUser(signItems));
    } else {
      const { password, email } = values;
      const loginItems = { password, email };
      dispatch(loginUser(loginItems));
    }
  };

  const route = allUsers.map((user: PartialUserObjectType) => {
    return (
      <Route
        exact
        path={`/users/${user.id}`}
        render={() =>
          user.id === currentUser.id ? (
            <User currentUser={currentUser} targetUser={currentUser} storeClubs={storeClubs} />
          ) : (
            <User currentUser={currentUser} targetUser={user} storeClubs={storeClubs} />
          )
        }
      />
    );
  });

  useEffect(() => {
    dispatch(getUsers());
    dispatch(addTypes(allTypes));
    dispatch(addShafts(shafts));
    dispatch(addMakers(makers));
  }, []);

  return (
    <Container>
      <Route
        exact
        path={ROUTE.USERS}
        render={() => <Users currentUser={currentUser} allUsers={allUsers} />}
      />
      {route}
      <Route exact path={ROUTE.TOP} render={() => <Top currentUser={currentUser} />} />
      <Route
        exact
        path={ROUTE.LOGIN}
        render={(props) =>
          existedCurrentUser ? (
            <Redirect to={ROUTE.TOP} />
          ) : (
            <Login {...props} currentUser={currentUser} onSubmit={onSubmit} />
          )
        }
      />
      <Route exact path={`/logout`} render={() => <LogOut currentUser={currentUser} />} />
      <Route
        exact
        path={ROUTE.SIGNUP}
        render={(props) =>
          existedCurrentUser ? (
            <Redirect to={ROUTE.TOP} />
          ) : (
            <SignUp {...props} currentUser={currentUser} onSubmit={onSubmit} />
          )
        }
      />
      <Route exact path={INFOROUTE.CONTACT} render={() => <Contact currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.ABOUT} render={() => <About currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.PRIVACY} render={() => <Privacy currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.TOS} render={() => <Tos currentUser={currentUser} />} />
    </Container>
  );
};

export default App;
