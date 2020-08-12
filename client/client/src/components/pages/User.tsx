import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import UserMain from "../organisms/user/UserMain";
import UserSub from "../organisms/user/UserSub";
import Layout from "../templates/Layout";
import { CLEAR } from "../../utils/constant/number";
import { Padding } from "../../utils/styled/styledSpace";
import FlexLayout from "../atoms/FlexLayout";

interface Props {
  login: boolean,
}

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;  
`;

const rightContent = (
  <UserSub />
);
const leftContent = (
  <UserMain />
);

const User: React.FC<Props> = ({login}) => {
  return (
    <Layout login={login}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <FlexLayout left={leftContent} right={rightContent} />
        </Container>
      </Padding>
    </Layout>
  )
}

export default User;