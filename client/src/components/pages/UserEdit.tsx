import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import Form from '../organisms/form/UserEditForm';
import { BASICCOLORS } from '../../utils/constant/color';
import ItemList from '../molecules/ItemList';
import { updateUser, updateImageUser, updateClubs } from '../../actions';
import ImageEditForm from '../organisms/form/image';
import ClubEditForm from '../organisms/form/club';

type FormikValueType = {
  formikClubs: ClubTableTypes;
};

interface Props {
  currentUser: UserObjectType;
  storeClubs: ClubTableTypes;
}

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

const checkObject = (obj: any) => {
  // まずキーのみをソートする
  const keys = Object.keys(obj).sort();
  // 返却する空のオブジェクトを作る
  let map: PartialClubObjectType = {};
  // ソート済みのキー順に返却用のオブジェクトに値を格納する
  keys.forEach((key) => {
    map[key as keyof PartialClubObjectType] = obj[key];
  });
  return map;
};

const UserEdit: React.FC<Props> = ({ currentUser, storeClubs }) => {
  const [currentEditPage, setEditPage] = useState<string>(editTitleList.profile);
  const moveEditPage = (value: string) => {
    setEditPage(value);
  };
  const checkedClubs: ClubTableTypes = Object.values(storeClubs).filter(
    (club: ClubObjectType) => club.userId === currentUser.id
  );
  const dispatch = useDispatch();

  const editProfileonSubmit = (values: PartialProfileEditInitialValuesDataType) => {
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
    const submitClubs = Object.values(values.formikClubs);
    let editClubs: PartialClubTableTypes = [];

    // JsonでObject比較
    const storeClubsJsonData = checkedClubs.map((value) => {
      return JSON.stringify(checkObject(value));
    });
    const unchanged = submitClubs
      .map((value, num) => {
        const data = JSON.stringify(checkObject(value));
        return storeClubsJsonData[num] === data;
      })
      .every((value) => value);
    //配列の長さで比較
    const checkedLength = submitClubs.length === checkedClubs.length;

    if (unchanged && checkedLength) {
      return;
    }

    const submitClubsIds = submitClubs.map((value) => {
      return value.id;
    });
    const deleteTargetClubs = Object.values(checkedClubs)
      .filter((value) => {
        const data = submitClubsIds.includes(value.id);
        return !data;
      })
      .map((value) => {
        return { ...value, name: undefined };
      });

    editClubs = [...submitClubs, ...deleteTargetClubs];
    dispatch(updateClubs(editClubs));
  };

  const Color = styled.div`
    background-color: ${BASICCOLORS.WHITELIGHT};
  `;

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
                storeClubs={checkedClubs}
                onSubmit={editClubsonSubmit}
              />
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
