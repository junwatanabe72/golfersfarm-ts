import React from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE, routeType } from "../../utils/constant/route"
import { defaultColors, colorType } from "../../utils/constant/color"
import LinkButton from '../atoms/LinkButton';

import Top from "./Top";
import Users from "./Users";
import User from "./User";

interface Props {
  bodyColor: colorType,
};

const BackgroundColor = styled.div<Props>`
  background-color: ${(props) => props.bodyColor}; 
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 800px;
`;
const num =1;
const Body: React.FC<Props> = ({ bodyColor }) => {
  return (
    <BackgroundColor bodyColor={bodyColor}>
      <Container>
        <Switch>
          <Route exact path={ROUTE.TOP} component={Top}/ >
          <Route exact path={ROUTE.USERS} component={Users}/ >
          <Route path={ROUTE.USER} component={User}/ >
        </Switch>
      </Container>
    </BackgroundColor>
  );
}

export default Body;