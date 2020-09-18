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

const UserEdit: React.FC<Props> = ({ currentUser, storeClubs }) => {
  const [currentEditPage, setEditPage] = useState<string>(editTitleList.profile);
  const moveEditPage = (value: string) => {
    setEditPage(value);
  };
  const checkedClub: ClubTableTypes = Object.values(storeClubs).filter(
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
    // update用
    const submitClubs = Object.values(values.formikClubs);

    // delete用
    const submitClubsIds = submitClubs.map((value) => {
      return value.id;
    });
    const deleteTargetClubs = Object.values(checkedClub).filter((value) => {
      const data = submitClubsIds.includes(value.id);
      return !data;
    });
    //
    if (submitClubs === checkedClub) {
      return;
    }
    dispatch(updateClubs([{ submitClubs }, { deleteTargetClubs }]));
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
              <ClubEditForm storeClubs={checkedClub} onSubmit={editClubsonSubmit} />
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
