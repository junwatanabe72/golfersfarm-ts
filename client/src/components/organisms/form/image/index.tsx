import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import InputItem from './InputItem';

interface Props {
  currentUser: UserType;
  onSubmit: (values: PartialImageUserType) => void;
}

const StyledForm = styled.form``;

const baseItems = {
  profileImage: 'プロフィールイメージ',
  clubImage: 'クラブセッティングイメージ',
};
const imageItemsKeys = Object.keys(baseItems).map((key) => {
  return key;
});
const profileNoteItems = {
  profileImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
  clubImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
};
const editTitle = 'イメージ';
const buttonValue = 'イメージを変更する。';
const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const ImageEditForm: React.FC<Props> = ({ currentUser, onSubmit }) => {
  const editFormDatas = {
    initialValuesData: {
      profileImage: currentUser.profileImage,
      clubImage: currentUser.clubImage,
    },
  };

  const imageValidation = () =>
    yup.object().shape({
      profileImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (!value || value === currentUser.profileImage) {
            return true;
          }
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (!value || value === currentUser.profileImage) {
            return true;
          }
          return SUPPORTED_FORMATS.includes(value.type);
        }),
      clubImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (!value || value === currentUser.clubImage) {
            return true;
          }
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (!value || value === currentUser.clubImage) {
            return true;
          }
          return SUPPORTED_FORMATS.includes(value.type);
        }),
    });

  const formik = useFormik({
    initialValues: { ...editFormDatas.initialValuesData },
    validationSchema: imageValidation,
    onSubmit: onSubmit,
  });
  return (
    <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
          <FormTitle>{editTitle}</FormTitle>
          {imageItemsKeys.map((key: string, num: number) => {
            return (
              <InputItem
                key={num}
                formik={formik}
                pKey={key}
                label={baseItems[key as keyof ImageUserType]}
                note={profileNoteItems[key as keyof ImageUserType]}
                currentUser={currentUser}
              />
            );
          })}
        </Padding>
        <FormSubmit>{buttonValue}</FormSubmit>
      </StyledForm>
    </Padding>
  );
};

export default ImageEditForm;
