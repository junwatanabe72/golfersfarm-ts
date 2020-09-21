import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik, FieldArray } from 'formik';
import Button from '../../../atoms/Button';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import ClubEditFormLayout from './ClubEditFormLayout';
import FlexLayout from '../../../atoms/FlexLayout';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';

type FormikValueType = {
  formikClubs: ArrayClubType;
};

interface Props {
  checkedClubs: ArrayClubType;
  currentUser: UserType;
  onSubmit: (values: any) => void;
}

const StyledTable = styled.table`
  width: ${SIZE.MEDIUM}vw;
  border: solid 1px #ccc;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: 60vw;  
      `}
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const editTitles = 'クラブ';
const editSubTitles = '使用クラブ';
const AddButtonText = ['クラブを追加'];
const buttonValue = 'クラブを登録・編集する。';
const formikKey = 'formikClubs';

const clubValidation = () =>
  yup.object({
    formikClubs: yup.array().of(
      yup.object().shape({
        name: yup.string().required('必須項目です').max(15, '15字以下にしてください。'),
      })
    ),
  });

const ClubEditForm: React.FC<Props> = ({ currentUser, checkedClubs, onSubmit }) => {
  const addItem = { name: '', userId: currentUser.id, type: '', maker: '', shaft: '', flex: '' };
  const initialValuesData = { formikClubs: checkedClubs };

  return (
    <Formik<FormikValueType>
      initialValues={initialValuesData}
      validationSchema={clubValidation}
      onSubmit={onSubmit}
    >
      <Padding top={CLEAR.MEDIUM} right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
        <Form>
          <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
            <FormTitle>{editTitles}</FormTitle>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <FlexLayout
                justifyContent={JUSTIFYCONTENT.START}
                width={SIZE.XXXSMALL}
                alignItems={ALIGNITEMS.START}
                left={
                  <Padding left={CLEAR.TINY}>
                    <StyledLabel>{editSubTitles}</StyledLabel>
                  </Padding>
                }
                right={
                  <FieldArray
                    name={formikKey}
                    render={({ remove, push }) => {
                      return (
                        <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                          <StyledTable>
                            <tbody>
                              <ClubEditFormLayout remove={remove} />
                            </tbody>
                          </StyledTable>
                          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                            <Button
                              color={BASICCOLORS.WHITE}
                              pHeight={CLEAR.TINY}
                              pWidth={CLEAR.TINY}
                              fontSize={FONTSIZE.SMALL}
                              onClick={() => {
                                push(addItem);
                              }}
                            >
                              {AddButtonText}
                            </Button>
                          </Padding>
                        </Padding>
                      );
                    }}
                  />
                }
              />
            </Padding>
            <FormSubmit>{buttonValue}</FormSubmit>
          </Padding>
        </Form>
      </Padding>
    </Formik>
  );
};

export default ClubEditForm;
