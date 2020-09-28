import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik, FieldArray } from 'formik';
import { updateClubs } from '../../../../actions';
import { checkObject } from '../../../pages/UserEdit';
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

const ClubEditForm: React.FC<Props> = ({ currentUser, checkedClubs }) => {
  const dispatch = useDispatch();
  const addItem = { name: '', userId: currentUser.id, type: '', maker: '', shaft: '', flex: '' };
  const initialValuesData = { formikClubs: checkedClubs };

  const onSubmit = (values: FormikValueType) => {
    let editClubs: PartialArrayClubType = [];
    const submitClubs = values.formikClubs;
    // ojbectに変化がなければ、return
    const storeClubsJsonData = checkedClubs.map((value) => {
      return JSON.stringify(checkObject(value));
    });
    const unchanged = submitClubs
      .map((value, num) => {
        const data = JSON.stringify(checkObject(value));
        return storeClubsJsonData[num] === data;
      })
      .every((value) => value);
    if (unchanged && submitClubs.length === checkedClubs.length) {
      return;
    }
    //deleteするクラブを抽出する。
    const submitClubsIds = submitClubs.map((value) => {
      return value.id;
    });
    const deleteTargetClubs = checkedClubs
      .filter((value) => {
        const data = submitClubsIds.includes(value.id);
        return !data;
      })
      .map((value) => {
        return { ...value, name: undefined };
      });
    //update,create,deleteするクラブを配列にする。
    editClubs = [...submitClubs, ...deleteTargetClubs];
    dispatch(updateClubs(editClubs));
  };

  return (
    <Formik<FormikValueType>
      initialValues={initialValuesData}
      validationSchema={clubValidation}
      onSubmit={onSubmit}
    >
      <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
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
                        <Padding
                          top={CLEAR.TINY}
                          right={CLEAR.SMALL}
                          left={CLEAR.SMALL}
                          bottom={CLEAR.TINY}
                        >
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
