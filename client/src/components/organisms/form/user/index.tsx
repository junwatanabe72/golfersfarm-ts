import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import UserEditFormLayout from './UserEditFormLayout';
import FormSubmit from '../../../atoms/form/FormSubmit';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import {
  sexLabels,
  sexValues,
  showLabels,
  showValues,
} from '../../../../utils/constant/text/body/user/value';
import useDialog from '../../../../utils/dialog';
import { emailValidation, nameValidation } from '../../../../validations';
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

const UserEditForm: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  const { ref, showDialog, closeDialog } = useDialog();
  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);

  const showValue = currentUser.show === 0 ? showLabels['open'] : showLabels['close'];
  const sexValue = currentUser.sex === 1 ? sexLabels['male'] : sexLabels['female'];
  const initialValuesData = {
    ...currentUser,
    show: showValue,
    sex: sexValue,
    confirmedPassword: currentUser.password,
  };

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
        {formik.dirty && (
          <FormSubmit closeDialog={closeDialog} showDialog={showDialog} propsRef={ref}>
            {buttonValue}
          </FormSubmit>
        )}
      </StyledForm>
    </Padding>
  );
};

export default UserEditForm;
