import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import UserMain from '../organisms/user/UserMain';
import UserSub from '../organisms/user/UserSub';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import FlexLayout from '../atoms/FlexLayout';
import { PartialIUserData } from '../../actions';

interface Props {
  currentUser: PartialIUserData;
}

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const User: React.FC<Props> = ({ currentUser }) => {
  const rightContent = <UserSub currentUser={currentUser} />;
  const leftContent = <UserMain currentUser={currentUser} />;

  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <FlexLayout left={leftContent} right={rightContent} />
        </Container>
      </Padding>
    </Layout>
  );
};

export default User;
