import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import { showValues } from '../../../pages/UserEdit';
import FormSubmit from '../../../atoms/form/FormSubmit';
import { emailValidation, nameValidation } from '../../../../validations';
import UserEditFormLayout from './UserEditFormLayout';

interface Props {
  currentUser: UserType;
  onSubmit: (values: ProfileEditDataType) => void;
}

const StyledForm = styled.form``;
const buttonValue = 'プロフィールを編集する。';
const profileValidation = () =>
  yup.object().shape({
    email: emailValidation(),
    name: nameValidation(),
  });

const UserEditForm: React.FC<Props> = ({ currentUser, onSubmit }) => {
  const showValue = currentUser.show ? showValues[0] : showValues[1];
  const initialValuesData = {
    ...currentUser,
    show: showValue,
    confirmedPassword: currentUser.password,
  };

  const formik = useFormik({
    initialValues: { ...initialValuesData },
    validationSchema: profileValidation,
    onSubmit: onSubmit,
  });

  return (
    <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <UserEditFormLayout formik={formik} />
        <FormSubmit>{buttonValue}</FormSubmit>
      </StyledForm>
    </Padding>
  );
};

export default UserEditForm;
