import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import InputItem from './InputItem';

type IEditItems = typeof baseItems;

interface Props {
  currentUser: UserObjectType;
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
          if (value !== undefined && value !== currentUser.profileImage) {
            return value.size <= FILE_SIZE;
          } else {
            return true;
          }
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (value !== undefined && value !== currentUser.profileImage) {
            return SUPPORTED_FORMATS.includes(value.type);
          } else {
            return true;
          }
        }),
      clubImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (value !== undefined && value !== currentUser.clubImage) {
            return value.size <= FILE_SIZE;
          } else {
            return true;
          }
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (value !== undefined && value !== currentUser.clubImage) {
            return SUPPORTED_FORMATS.includes(value.type);
          } else {
            return true;
          }
        }),
    });

  const formik = useFormik({
    initialValues: { ...editFormDatas.initialValuesData },
    validationSchema: imageValidation,
    onSubmit: onSubmit,
  });
  return (
    <Padding all={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
          <FormTitle>{editTitle}</FormTitle>
          {imageItemsKeys.map((key: string) => {
            return (
              <InputItem
                formik={formik}
                pKey={key}
                label={baseItems[key as keyof IEditItems]}
                note={profileNoteItems[key as keyof IEditItems]}
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
