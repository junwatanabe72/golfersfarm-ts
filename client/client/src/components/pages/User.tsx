import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import UserMain from "../molecules/user/UserMain";
import UserSub from "../molecules/user/UserSub";
import Layout from "../templates/Layout";
import { CLEAR } from "../../utils/constant/number";
import { media } from '../../utils/styled/styledRdesign';
import { Padding } from "../../utils/styled/styledSpace";

interface Props {
  login: boolean,
}
// interface Props extends RouteComponentProps<{id: string}>{
//   login: boolean,
// };

const userName = "jun"

const Container = styled.div`
  display:flex;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;  
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const User: React.FC<Props> = ({login}) => {
  return (
    <Layout login={login}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <UserMain />
        <Padding all={CLEAR.XSMALL}  />
          <UserSub />
        </Container>
      </Padding>
    </Layout>
  )
}

export default User;