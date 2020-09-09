import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import Top from './components/pages/Top';
import Users from './components/pages/Users';
import User from './components/pages/User';
import UserEdit from './components/pages/UserEdit';
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
import { State } from './@types/store';

library.add(fas, far, fab);

interface Props {}
const Container = styled.div`
  width: 100%;
`;

const App: React.FC<Props> = ({}) => {
  const currentUser = useSelector((state: State) => state.currentUser);
  const storeUsers = useSelector((state: State) => state.users);
  const clubTypes = useSelector((state: State) => state.types);
  const allShafts = useSelector((state: State) => state.shafts);
  const makers = useSelector((state: State) => state.maker);
  const storeClubs = useSelector((state: State) => state.clubs);
  const dispatch = useDispatch();
  const existedCurrentUser = 0 !== Object.keys(currentUser).length;

  const loginSignUponSubmit = (values: LoginSignUpValuesDataType) => {
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

  const allUsers = storeUsers.length === 0 ? [currentUser] : [...storeUsers];
  const route = allUsers.map((user: PartialUserObjectType) => {
    return (
      <>
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
        <Route
          exact
          path={`/users/${user.id}/edit`}
          render={() =>
            user.id === currentUser.id ? (
              <UserEdit currentUser={currentUser} />
            ) : (
              <Redirect to={ROUTE.TOP} />
            )
          }
        />
      </>
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
            <Login {...props} currentUser={currentUser} onSubmit={loginSignUponSubmit} />
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
            <SignUp {...props} currentUser={currentUser} onSubmit={loginSignUponSubmit} />
          )
        }
      />
      <Route exact path={INFOROUTE.CONTACT} render={() => <Contact currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.ABOUT} render={() => <About currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.PRIVACY} render={() => <Privacy currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.TOS} render={() => <Tos currentUser={currentUser} />} />
      <Route exact path={'*'} render={() => <Redirect to={ROUTE.TOP} />} />
    </Container>
  );
};

export default App;
