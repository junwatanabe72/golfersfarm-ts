import React from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE, ROUTETYPE } from "../../utils/constant/route"
import { COLORTYPES } from "../../utils/constant/color"
import { CLEAR } from "../../utils/constant/number";
import { Padding } from "../../utils/styled/styledSpace";
import Top from "../organisms/Top";
import Users from "./Users";

interface Props {
  bodyColor: COLORTYPES,
};

const BackgroundColor = styled.div<Props>`
  background-color: ${(props) => props.bodyColor}; 
`;

const Container = styled.div`
  
`;
const num =1;
const Body: React.FC<Props> = ({ bodyColor }) => {
  return (
    <BackgroundColor bodyColor={bodyColor}>
      {/* <Padding top={CLEAR.MEDIUM} /> */}
      <Switch>
        <Route exact path={ROUTE.TOP} component={Top}/ >
        <Route exact path={ROUTE.USERS} component={Users}/ >
      </Switch>
    </BackgroundColor>
  );
}

export default Body;