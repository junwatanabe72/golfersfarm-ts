import React from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE,INFOROUTE } from "../../utils/constant/route"
import { ICOLOR } from "../../utils/constant/color"
import Top from "../organisms/Top";
import Users from "../organisms/Users";
import User from "../organisms/User";
import Contact from '../organisms/Contact';
import About from '../organisms/About';
import Privacy from '../organisms/Privacy';
import Tos from '../organisms/Tos';


interface Props extends ICOLOR{
};

const BackgroundColor = styled.div<Props>`
  background-color: ${(props) => props.color}; 
`;

const Container = styled.div`
`;

const num =1;
const Body: React.FC<Props> = ({ color }) => {
  return (
    <BackgroundColor color={color}>
      <Container>
        <Switch>
            <Route exact path={ROUTE.TOP} component={Top}/ >
            <Route exact path={ROUTE.USERS} component={Users}/ >
            <Route exact path={"/users/*"} component={User} />
            <Route exact path={INFOROUTE.CONTACT} component={Contact} />
            <Route exact path={INFOROUTE.ABOUT} component={About} />
            <Route exact path={INFOROUTE.PRIVACY} component={Privacy} />
            <Route exact path={INFOROUTE.TOS} component={Tos} />
        </Switch>
      </Container>
    </BackgroundColor>
  );
}

export default Body;