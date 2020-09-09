import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import UserMain from '../organisms/user/Main';
import UserSub from '../organisms/user/Sub';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { addClubs, getGears } from '../../actions';
import { allClubs } from '../../utils/constant/text/body/user/value';
import { Padding } from '../../utils/styled/styledSpace';
import FlexLayout from '../atoms/FlexLayout';

interface Props {
  currentUser: PartialUserObjectType;
  targetUser: PartialUserObjectType;
  storeClubs: ClubTableTypes;
}

const User: React.FC<Props> = ({ currentUser, targetUser, storeClubs }) => {
  const checkedClub: ClubTableTypes = Object.values(storeClubs).filter(
    (club: ClubObjectType) => club.userId === targetUser.id
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGears(targetUser));
  }, []);
  const rightContent = <UserSub targetUser={targetUser} storeClubs={checkedClub} />;
  const leftContent = <UserMain targetUser={targetUser} />;
  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <FlexLayout left={leftContent} right={rightContent} />
      </Padding>
    </Layout>
  );
};

export default User;
