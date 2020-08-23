import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { State } from '../../store';
import { RouteComponentProps } from 'react-router-dom';
import UserMain from '../organisms/user/Main';
import UserSub from '../organisms/user/Sub';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { addClubs } from '../../actions';
import { allClubs } from '../../utils/constant/text/body/user/value';
import { Padding } from '../../utils/styled/styledSpace';
import FlexLayout from '../atoms/FlexLayout';
import { PartialUserObjectType, clubTableTypes } from '../../utils/constant/storeType';

interface Props {
  currentUser: PartialUserObjectType;
  targetUser: PartialUserObjectType;
  storeClubs: clubTableTypes;
}

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const User: React.FC<Props> = ({ currentUser, targetUser, storeClubs }) => {
  const checkedClubs = Object.values(allClubs).filter((club) => club.userId === targetUser.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addClubs(checkedClubs));
  }, []);
  const rightContent = <UserSub targetUser={targetUser} storeClubs={storeClubs} />;
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
