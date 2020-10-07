import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import FormSubmit from '../../../atoms/form/FormSubmit';
import { emailValidation, nameValidation } from '../../../../validations';
import UserEditFormLayout from './UserEditFormLayout';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../actions';

interface Props {
  currentUser: UserType;
}

const StyledForm = styled.form``;
const buttonValue = 'プロフィールを編集する。';
const profileValidation = () =>
  yup.object().shape({
    email: emailValidation(),
    name: nameValidation(),
  });

const showValues = ['公開', '非公開'];

const UserEditForm: React.FC<Props> = ({ currentUser }) => {
  const showValue = currentUser.show ? showValues[0] : showValues[1];
  const initialValuesData = {
    ...currentUser,
    show: showValue,
    confirmedPassword: currentUser.password,
  };
  const dispatch = useDispatch();
  const onSubmit = (values: ProfileEditDataType) => {
    const showValue = values.show === showValues[0] ? true : false;
    dispatch(updateUser({ ...values, show: showValue }));
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
        {formik.dirty && <FormSubmit>{buttonValue}</FormSubmit>}
      </StyledForm>
    </Padding>
  );
};

export default UserEditForm;
