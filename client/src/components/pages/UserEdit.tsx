import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Layout from '../templates/Layout';
import Form from '../organisms/form/user';
import ImageEditForm from '../organisms/form/image';
import ArrayEditForm from '../organisms/form/club_result';
import BallEditForm from '../organisms/form/ball';
import VideoEditForm from '../organisms/form/video';
import ItemList from '../molecules/ItemList';
import { getClubs, getBall, getVideos, getResults } from '../../actions';
import { CLEAR, SIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { editTitleList } from '../../utils/constant/text/common';

interface Props {
  currentUser: UserType;
  storeClubs: ObjectClubType;
  storeBalls: ObjectBallType;
  storeVideos: ObjectVideoType;
  storeResults: ObjectResultType;
}
const Color = styled.div`
  background-color: ${BASICCOLORS.WHITELIGHT};
`;

const UserEdit: React.FC<Props> = ({
  currentUser,
  storeClubs,
  storeBalls,
  storeVideos,
  storeResults,
}) => {
  const [currentEditPage, setEditPage] = useState<string>(editTitleList.profile);
  const moveEditPage = (value: string) => {
    setEditPage(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubs(currentUser));
    dispatch(getVideos(currentUser));
    dispatch(getBall(currentUser));
    dispatch(getResults(currentUser));
  }, []);

  const checkedClubs: ArrayClubType = Object.values(storeClubs).filter(
    (club: ClubType) => club.userId === currentUser.id
  );
  const checkedVideos: ArrayVideoType = Object.values(storeVideos).filter(
    (video: VideoType) => video.userId === currentUser.id
  );
  const checkedResults: ArrayResultType = Object.values(storeResults).filter(
    (result: ResultType) => result.userId === currentUser.id
  );
  const userBall: BallType | undefined = Object.values(storeBalls).find(
    (ball: BallType) => ball.userId === currentUser.id
  );

  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Color>
          <ItemList
            list={Object.values(editTitleList)}
            onClick={moveEditPage}
            state={currentEditPage}
            width={SIZE.SMALL}
          />
          {currentEditPage === editTitleList.profile && <Form currentUser={currentUser} />}
          {currentEditPage === editTitleList.image && <ImageEditForm currentUser={currentUser} />}
          {currentEditPage === editTitleList.gear && (
            <>
              <ArrayEditForm
                currentUser={currentUser}
                currentValues={checkedClubs}
                theme={'club'}
              />
              {userBall && <BallEditForm userBall={userBall} />}
            </>
          )}
          {currentEditPage === editTitleList.video && (
            <VideoEditForm currentUser={currentUser} checkedVideos={checkedVideos} />
          )}
          {currentEditPage === editTitleList.result && (
            <ArrayEditForm
              currentUser={currentUser}
              currentValues={checkedResults}
              theme={'result'}
            />
          )}
        </Color>
      </Padding>
    </Layout>
  );
};

export default UserEdit;
