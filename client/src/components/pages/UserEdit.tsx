import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import Form from '../organisms/form/UserEditForm';
import { BASICCOLORS } from '../../utils/constant/color';
import ItemList from '../molecules/ItemList';
import {
  updateUser,
  updateImageUser,
  updateClubs,
  getClubs,
  getBall,
  updateBall,
} from '../../actions';
import ImageEditForm from '../organisms/form/image';
import ClubEditForm from '../organisms/form/club';
import BallEditForm from '../organisms/form/ball';

type FormikValueType = {
  formikClubs: ArrayClubType;
};

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

export const selectProfileItems = {
  sex: { head: '性別', body: ['男性', '女性'] },
  show: { head: '公開・非公開', body: ['公開', '非公開'] },
};

const checkObject = (obj: { [key: string]: string | number }) => {
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
  }, [currentUser, storeClubs, storeBalls]);

  const checkedClubs: ArrayClubType = Object.values(storeClubs).filter(
    (club: ClubType) => club.userId === currentUser.id
  );
  const userBall: BallType | undefined = Object.values(storeBalls).find(
    (ball: BallType) => ball.userId === currentUser.id
  );

  const editProfileonSubmit = (values: ProfileEditDataType) => {
    const showValue = values.show === selectProfileItems.show.body[0] ? true : false;
    dispatch(updateUser({ ...values, show: showValue }));
  };
  const editImageonSubmit = async (values: PartialImageUserType) => {
    if (
      values.profileImage === currentUser.profileImage &&
      values.clubImage === currentUser.clubImage
    ) {
      return;
    }
    const formData = new FormData();
    if (values.profileImage !== currentUser.profileImage && values.profileImage !== undefined) {
      formData.append('profileImage', values.profileImage);
    }
    if (values.clubImage !== currentUser.clubImage && values.clubImage !== undefined) {
      formData.append('clubImage', values.clubImage);
    }
    formData.append('id', String(currentUser.id));
    dispatch(updateImageUser(formData));
  };

  const editClubsonSubmit = (values: FormikValueType) => {
    let editClubs: PartialArrayClubType = [];
    const submitClubs = values.formikClubs;

    // ojbectに変化がなければ、return
    const storeClubsJsonData = checkedClubs.map((value) => {
      return JSON.stringify(checkObject(value));
    });
    const unchanged = submitClubs
      .map((value, num) => {
        const data = JSON.stringify(checkObject(value));
        return storeClubsJsonData[num] === data;
      })
      .every((value) => value);
    if (unchanged && submitClubs.length === checkedClubs.length) {
      return;
    }

    //deleteするクラブを抽出する。
    const submitClubsIds = submitClubs.map((value) => {
      return value.id;
    });
    const deleteTargetClubs = checkedClubs
      .filter((value) => {
        const data = submitClubsIds.includes(value.id);
        return !data;
      })
      .map((value) => {
        return { ...value, name: undefined };
      });
    //update,create,deleteするクラブを配列にする。
    editClubs = [...submitClubs, ...deleteTargetClubs];
    dispatch(updateClubs(editClubs));
  };

  const editBallonSubmit = (values: BallType) => {
    // ojbectに変化がなければ、return
    if (!userBall) {
      return;
    }
    const formikJsonData = JSON.stringify(checkObject(values));
    const storeJsonData = JSON.stringify(checkObject(userBall));

    if (formikJsonData === storeJsonData) {
      return;
    }
    console.log(values);
    dispatch(updateBall(values));
  };

  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Color>
          <ItemList
            list={Object.values(editTitleList)}
            onClick={moveEditPage}
            state={currentEditPage}
          />
          {currentEditPage === editTitleList.profile && (
            <Form currentUser={currentUser} onSubmit={editProfileonSubmit} />
          )}
          {currentEditPage === editTitleList.image && (
            <ImageEditForm currentUser={currentUser} onSubmit={editImageonSubmit} />
          )}
          {currentEditPage === editTitleList.gear && (
            <>
              <ClubEditForm
                currentUser={currentUser}
                checkedClubs={checkedClubs}
                onSubmit={editClubsonSubmit}
              />
              {userBall && <BallEditForm userBall={userBall} onSubmit={editBallonSubmit} />}
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
