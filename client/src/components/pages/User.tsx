import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserMain from '../organisms/user/Main';
import UserSub from '../organisms/user/Sub';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { getClubs, getBall, getVideos, getResults } from '../../actions';
import { Padding } from '../../utils/styled/styledSpace';
import FlexLayout from '../atoms/FlexLayout';
import { clubOrder } from '../../utils/constant/text/body/user/value';

interface Props {
  currentUser: PartialUserType;
  targetUser: PartialUserType;
  storeClubs: ObjectClubType;
  storeBalls: ObjectBallType;
  storeVideos: ObjectVideoType;
  storeResults: ObjectResultType;
}

const User: React.FC<Props> = ({
  currentUser,
  targetUser,
  storeClubs,
  storeBalls,
  storeVideos,
  storeResults,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubs(targetUser));
    dispatch(getVideos(targetUser));
    dispatch(getBall(targetUser));
    dispatch(getResults(targetUser));
  }, []);
  // const

  const checkedClubs: ArrayClubType = Object.values(storeClubs)
    .filter((club: ClubType) => club.userId === targetUser.id)
    .sort((first: ClubType, second: ClubType) => {
      const firstNumber = clubOrder.indexOf(first.type);
      const secondNumber = clubOrder.indexOf(second.type);
      if (firstNumber < secondNumber) {
        return -1;
      } else {
        return 1;
      }
    });
  const checkedVideos: ArrayVideoType = Object.values(storeVideos).filter(
    (video: VideoType) => video.userId === targetUser.id
  );
  const checkedResults: ArrayResultType = Object.values(storeResults)
    .filter((result: ResultType) => result.userId === targetUser.id)
    .sort((first: ResultType, second: ResultType) => {
      const firstMonths = first.year * 12 + first.month;
      const secondMonths = second.year * 12 + second.month;
      if (firstMonths > secondMonths) {
        return -1;
      } else {
        return 1;
      }
    });
  const userBall: BallType | undefined = Object.values(storeBalls).find(
    (ball: BallType) => ball.userId === targetUser.id
  );
  // console.log(storeResults);
  // console.log(checkedResults);
  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <FlexLayout
          left={<UserMain targetUser={targetUser} />}
          right={
            <UserSub
              targetUser={targetUser}
              checkedClubs={checkedClubs}
              userBall={userBall}
              checkedVideos={checkedVideos}
              checkedResults={checkedResults}
            />
          }
        />
      </Padding>
    </Layout>
  );
};

export default User;
