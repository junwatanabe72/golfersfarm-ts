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
import {
  sexLabels,
  sexValues,
  showLabels,
  showValues,
} from '../../../../utils/constant/text/body/user/value';

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

const UserEditForm: React.FC<Props> = ({ currentUser }) => {
  const showValue = currentUser.show === 0 ? showLabels['open'] : showLabels['close'];
  const sexValue = currentUser.sex === 0 ? sexLabels['male'] : sexLabels['female'];
  const initialValuesData = {
    ...currentUser,
    show: showValue,
    sex: sexValue,
    confirmedPassword: currentUser.password,
  };
  const dispatch = useDispatch();
  const onSubmit = (values: ProfileEditDataType) => {
    const showValue = values.show === showLabels['open'] ? showValues['open'] : showValues['close'];
    const sexValue = values.sex === sexLabels['male'] ? sexValues['male'] : sexValues['female'];
    dispatch(updateUser({ ...values, show: showValue, sex: sexValue }));
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
