import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik, FieldArray } from 'formik';
import ResultEditFormLayout from './ResultEditLayout';
import FlexLayout from '../../../atoms/FlexLayout';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import Button from '../../../atoms/Button';
import { updateResults } from '../../../../actions';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { checkObject } from '../../../../utils/constant/text/form';
import { media } from '../../../../utils/styled/styledRdesign';

interface FormikValueType<T> {
  formikValues: T;
}

interface Props {
  checkedResults: ArrayResultType;
  currentUser: UserType;
}

const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const StyledTable = styled.table`
  width: ${SIZE.MEDIUM}vw;
  border: solid 1px #ccc;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: 60vw;  
      `}
`;

const editTitles = '競技実績';
const editSubTitles = '競技結果';
const AddButtonText = ['競技結果を追加'];
const buttonValue = '競技結果を登録・削除する。';
const formikKey = 'formikValues';

const resultValidation = () =>
  yup.object({
    formikResults: yup.array().of(
      yup.object().shape({
        name: yup.string().required('必須項目です').max(15, '15字以下にしてください。'),
        url: yup.string().required('必須項目です'),
      })
    ),
  });

const ResultEditForm: React.FC<Props> = ({ currentUser, checkedResults }) => {
  const arrayDatas = Object.values(checkedResults);
  const dispatch = useDispatch();
  const addItem = { name: '', userId: currentUser.id, url: '', date: '', rank: '' };
  const initialValuesData = { formikValues: arrayDatas };

  const onSubmit = (values: FormikValueType<ArrayResultType>) => {
    let editResults: PartialArrayResultType = [];
    const submitResults = values.formikValues;
    // ojbectに変化がなければ、return
    const storeResultsJsonData = checkedResults.map((value) => {
      return JSON.stringify(checkObject(value));
    });
    const unchanged = submitResults
      .map((value, num) => {
        const data = JSON.stringify(checkObject(value));
        return storeResultsJsonData[num] === data;
      })
      .every((value) => value);
    if (unchanged && submitResults.length === checkedResults.length) {
      return;
    }
    //deleteするResultを抽出する。
    const submitResultsIds = submitResults.map((value) => {
      return value.id;
    });
    const deleteTargetResults = checkedResults
      .filter((value) => {
        const data = submitResultsIds.includes(value.id);
        return !data;
      })
      .map((value) => {
        return { ...value, name: undefined };
      });
    //update,create,deleteするResultを配列にする。
    editResults = [...submitResults, ...deleteTargetResults];
    console.log(editResults);
    dispatch(updateResults(editResults));
  };

  return (
    <Formik<FormikValueType<ArrayResultType>>
      initialValues={initialValuesData}
      validationSchema={resultValidation}
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
                              <ResultEditFormLayout remove={remove} formikKey={formikKey} />
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

export default ResultEditForm;
