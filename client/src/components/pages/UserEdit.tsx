import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import Layout from '../templates/Layout';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import Form from '../molecules/form';
import { BASICCOLORS } from '../../utils/constant/color';
import { initialValuesDataType } from '../../@type/components/form';
import { FORMTYPES } from '../../utils/constant/text/form';
import ItemList from '../molecules/ItemList';

interface Props {
  currentUser: userObjectType;
  onSubmit: (values: initialValuesDataType) => void;
}

const backText = 'アカウントをお持ちの方はこちら';
const editTitle = 'Profile Edit';
const profileEditText = {
  backText,
  editTitle,
};

const signUpValidation = () =>
  yup.object().shape({
    email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
    name: yup.string().required('必須項目です'),
    password: yup
      .string()
      .required('必須項目です')
      .min(8, '8字以上にしてください。')
      .max(30, '30字以下にしてください。'),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], '入力したパスワードではありません。'),
  });

export const editTitleList = {
  profile: 'PROFILE',
  image: 'IMAGE',
  gear: 'GEAR',
  video: 'VIEDO',
  result: 'RESULT',
} as const;

const UserEdit: React.FC<Props> = ({ currentUser, onSubmit }) => {
  const [currentEditPage, setEditPage] = useState<string>(editTitleList.profile);
  const moveEditPage = (value: string) => {
    setEditPage(value);
  };
  const profileEditFormDatas = {
    initialValuesData: {
      email: currentUser.email,
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      facebook: currentUser.facebook,
      twitter: currentUser.twitter,
      instagram: currentUser.instagram,
      youtube: currentUser.youtube,
      sex: currentUser.sex,
      residence: currentUser.residence,
      birthPlace: currentUser.birthPlace,
      school: currentUser.school,
      job: currentUser.job,
      hobby: currentUser.hobby,
      bestScore: currentUser.bestScore,
      averageDistance: currentUser.averageDistance,
      homeCource: currentUser.homeCource,
      clubImage: currentUser.clubImage,
      show: '',
      password: '',
      confirmedPassword: '',
    },
    placeHolder: {
      email: '',
      name: '',
      profileImage: '',
      facebook: '',
      twitter: '',
      instagram: '',
      youtube: '',
      sex: '',
      residence: '',
      birthPlace: '',
      school: '',
      job: '',
      hobby: '',
      bestScore: '',
      averageDistance: '',
      homeCource: '',
      clubImage: '',
      show: '',
      password: '英数字８字以上のパスワード',
      confirmedPassword: '確認用パスワード',
    },
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
            <Form
              type={FORMTYPES.USERPROFILE}
              formDatas={profileEditFormDatas}
              validation={signUpValidation}
              buttonValue={profileEditText.editTitle}
              onSubmit={onSubmit}
            />
          )}
          {currentEditPage === editTitleList.image && <div>IMAGE</div>}
          {currentEditPage === editTitleList.gear && <div>GEAR</div>}
          {currentEditPage === editTitleList.video && <div>VIDEO</div>}
          {currentEditPage === editTitleList.result && <div>RESULT</div>}
        </Color>
      </Padding>
    </Layout>
  );
};

export default UserEdit;
