import React from 'react';
import {
  formDataTypes,
  ValidationType,
  initialValuesDataType,
  IFORMTYPES,
} from '../../../@type/components/form';
import SignLoginForm from './SignLoginForm';
import UserEditForm from './UserEditForm';
import { FORMTYPES } from '../../../utils/constant/text/form';

interface Props extends formDataTypes, IFORMTYPES {
  validation: ValidationType;
  buttonValue: string;
  onSubmit: (values: initialValuesDataType) => void;
}

const Form: React.FC<Props> = ({ formDatas, validation, buttonValue, onSubmit, type }) => {
  return (
    <>
      {type === FORMTYPES.SIGNLOGIN && (
        <SignLoginForm
          formDatas={formDatas}
          validation={validation}
          buttonValue={buttonValue}
          onSubmit={onSubmit}
        />
      )}
      {type === FORMTYPES.USERPROFILE && (
        <UserEditForm
          formDatas={formDatas}
          validation={validation}
          buttonValue={buttonValue}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Form;
