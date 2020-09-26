import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserMain from '../organisms/user/Main';
import UserSub from '../organisms/user/Sub';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { getClubs, getBall } from '../../actions';
import { Padding } from '../../utils/styled/styledSpace';
import FlexLayout from '../atoms/FlexLayout';

interface Props {
  currentUser: PartialUserType;
  targetUser: PartialUserType;
  storeClubs: ObjectClubType;
  storeBalls: ObjectBallType;
}

const User: React.FC<Props> = ({ currentUser, targetUser, storeClubs, storeBalls }) => {
  const checkedClubs: ArrayClubType = Object.values(storeClubs).filter(
    (club: ClubType) => club.userId === targetUser.id
  );
  const userBall: BallType | undefined = Object.values(storeBalls).find(
    (ball: BallType) => ball.userId === targetUser.id
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubs(targetUser));
    dispatch(getBall(targetUser));
  }, []);
  const rightContent = (
    <UserSub targetUser={targetUser} checkedClubs={checkedClubs} userBall={userBall} />
  );
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
