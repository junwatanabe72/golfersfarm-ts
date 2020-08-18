import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import UserMain from '../organisms/user/Main';
import UserSub from '../organisms/user/Sub';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import FlexLayout from '../atoms/FlexLayout';
import { PartialIUserData, UserData } from '../../actions';

interface Props {
  currentUser: PartialIUserData;
  targetUser: UserData;
}

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const User: React.FC<Props> = ({ currentUser, targetUser }) => {
  const rightContent = <UserSub targetUser={targetUser} />;
  const leftContent = <UserMain targetUser={targetUser} />;

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
