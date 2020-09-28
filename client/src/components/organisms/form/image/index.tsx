import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import InputItem from './InputItem';
import { updateImageUser } from '../../../../actions';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';

interface Props {
  currentUser: UserType;
}

const StyledForm = styled.form``;
const items = {
  profileImage: 'profileImage',
  clubImage: 'clubImage',
};
const editTitle = 'イメージ';
const buttonValue = 'イメージを変更する。';
const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const ImageEditForm: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  const initialValuesData = {
    profileImage: currentUser.profileImage,
    clubImage: currentUser.clubImage,
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

  const onSubmit = async (values: PartialImageUserType) => {
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
  const formik = useFormik({
    initialValues: { ...initialValuesData },
    validationSchema: imageValidation,
    onSubmit: onSubmit,
  });
  return (
    <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
          <FormTitle>{editTitle}</FormTitle>
          {Object.values(items).map((key: string, num: number) => {
            return <InputItem key={num} formik={formik} valueKey={key} currentUser={currentUser} />;
          })}
        </Padding>
        <FormSubmit>{buttonValue}</FormSubmit>
      </StyledForm>
    </Padding>
  );
};

export default ImageEditForm;
