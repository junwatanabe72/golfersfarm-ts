import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import Form from '../organisms/form/user';
import { BASICCOLORS } from '../../utils/constant/color';
import ItemList from '../molecules/ItemList';
import { getClubs, getBall } from '../../actions';
import ImageEditForm from '../organisms/form/image';
import ClubEditForm from '../organisms/form/club';
import BallEditForm from '../organisms/form/ball';

interface Props {
  currentUser: UserType;
  storeClubs: ObjectClubType;
  storeBalls: ObjectBallType;
}
const Color = styled.div`
  background-color: ${BASICCOLORS.WHITELIGHT};
`;

export const editTitleList = {
  profile: 'PROFILE',
  image: 'IMAGE',
  gear: 'GEAR',
  video: 'VIEDO',
  result: 'RESULT',
} as const;

export const showValues = ['公開', '非公開'];

export const checkObject = (obj: { [key: string]: string | number }) => {
  // まずキーのみをソートする
  const keys = Object.keys(obj).sort();
  // 返却する空のオブジェクトを作る
  let map: { [key: string]: string | number } = {};
  // ソート済みのキー順に返却用のオブジェクトに値を格納する
  keys.forEach((key) => {
    map[key] = obj[key];
  });
  return map;
};

const UserEdit: React.FC<Props> = ({ currentUser, storeClubs, storeBalls }) => {
  const [currentEditPage, setEditPage] = useState<string>(editTitleList.profile);
  const moveEditPage = (value: string) => {
    setEditPage(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubs(currentUser));
    dispatch(getBall(currentUser));
  }, []);

  const checkedClubs: ArrayClubType = Object.values(storeClubs).filter(
    (club: ClubType) => club.userId === currentUser.id
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
          />
          {currentEditPage === editTitleList.profile && <Form currentUser={currentUser} />}
          {currentEditPage === editTitleList.image && <ImageEditForm currentUser={currentUser} />}
          {currentEditPage === editTitleList.gear && (
            <>
              <ClubEditForm currentUser={currentUser} checkedClubs={checkedClubs} />
              {userBall && <BallEditForm userBall={userBall} />}
            </>
          )}
          {currentEditPage === editTitleList.video && <div>VIDEO</div>}
          {currentEditPage === editTitleList.result && <div>RESULT</div>}
        </Color>
      </Padding>
    </Layout>
  );
};

export default UserEdit;
