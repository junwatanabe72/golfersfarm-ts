import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik, FieldArray } from 'formik';
import VideoEditFormItem from './VideoEditFormItem';
import FlexLayout from '../../../atoms/FlexLayout';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import Button from '../../../atoms/Button';
import { updateVideos } from '../../../../actions';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { checkObject } from '../../../../utils/constant/text/form';
import { nameValidation, urlValidation } from '../../../../validations';

interface Props {
  checkedVideos: ArrayVideoType;
  currentUser: UserType;
}

const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const editTitles = 'youtube動画';
const editSubTitles = '登録動画';
const AddButtonText = ['動画を追加'];
const buttonValue = '動画を登録・削除する。';

const videoValidation = () =>
  yup.object({
    formikVideos: yup.array().of(
      yup.object().shape({
        name: nameValidation(),
        url: urlValidation(),
      })
    ),
  });

const VideoEditForm: React.FC<Props> = ({ currentUser, checkedVideos }) => {
  const arrayDatas = Object.values(checkedVideos);
  const dispatch = useDispatch();
  const addItem = { name: '', userId: currentUser.id, url: '' };
  const initialValuesData = { formikValues: arrayDatas };
  const formikKey = Object.keys(initialValuesData)[0];

  const onSubmit = (values: FormikValueType<ArrayVideoType>) => {
    let editVideos: PartialArrayVideoType = [];
    const submitVideos = values.formikValues;
    // ojbectに変化がなければ、return
    const storeVideosJsonData = checkedVideos.map((value) => {
      return JSON.stringify(checkObject(value));
    });

    const unchanged = submitVideos
      .map((value, num) => {
        const data = JSON.stringify(checkObject(value));
        return storeVideosJsonData[num] === data;
      })
      .every((value) => value);
    if (unchanged && submitVideos.length === checkedVideos.length) {
      return;
    }
    //deleteするvideoを抽出する。
    const submitVideosIds = submitVideos.map((value) => {
      return value.id;
    });
    const deleteTargetVideos = checkedVideos
      .filter((value) => {
        const data = submitVideosIds.includes(value.id);
        return !data;
      })
      .map((value) => {
        return { ...value, name: undefined };
      });
    //update,create,deleteするvideoを配列にする。
    editVideos = [...submitVideos, ...deleteTargetVideos];
    dispatch(updateVideos(editVideos));
  };

  return (
    <Formik<FormikValueType<ArrayVideoType>>
      initialValues={initialValuesData}
      validationSchema={videoValidation}
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
                          <VideoEditFormItem
                            remove={remove}
                            currentVideos={arrayDatas}
                            formikKey={formikKey}
                          />
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

export default VideoEditForm;
