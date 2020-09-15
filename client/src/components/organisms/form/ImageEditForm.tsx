import React, { useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { BASICCOLORS } from '../../../utils/constant/color';
import FlexLayout from '../../atoms/FlexLayout';
import FormTitle from '../../atoms/form/FormTitle';
import FormSubmit from '../../atoms/form/FormSubmit';

type IEditItems = typeof baseItems;
type INoteItems = typeof profileNoteItems;

interface Props {
  currentUser: UserObjectType;
  onSubmit: (values: PartialImageUserType) => void;
}

const StyledForm = styled.form``;

const StyledField = styled.input`
  font-size: ${FONTSIZE.SMALL}px;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;

const Styleddiv = styled.div`
  margin: 0 auto;
  color: ${BASICCOLORS.SECONDARYDARK};
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Inline = styled.div`
  font-size: ${FONTSIZE.SMALL}px;
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const Image = styled.img`
  width: ${SIZE.XXSMALL}vw;
  ${media.tablet`
        width: ${SIZE.SMALL}vw
      `}
`;
const baseItems = {
  profileImage: 'プロフィールイメージ',
  clubImage: 'クラブセッティングイメージ',
};

const profileNoteItems = {
  profileImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
  clubImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
};
const editTitle = 'イメージ';
const buttonValue = 'イメージを変更する。';
const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const ImageEditForm: React.FC<Props> = ({ currentUser, onSubmit }) => {
  const [cImage, setCImage] = useState<any>(currentUser.clubImage);
  const [PImage, setPImage] = useState<any>(currentUser.profileImage);
  const editCImage = (value: string | ArrayBuffer | null) => {
    setCImage(value);
  };
  const editPImage = (value: string | ArrayBuffer | null) => {
    setPImage(value);
  };
  const editFormDatas = {
    initialValuesData: {
      profileImage: currentUser.profileImage,
      clubImage: currentUser.clubImage,
    },
    placeHolder: {
      profileImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
      clubImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
    },
  };

  const imageValidation = () =>
    yup.object().shape({
      profileImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (value !== undefined && value !== currentUser.profileImage) {
            return value.size <= FILE_SIZE;
          } else {
            return true;
          }
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (value !== undefined && value !== currentUser.profileImage) {
            return SUPPORTED_FORMATS.includes(value.type);
          } else {
            return true;
          }
        }),
      clubImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (value !== undefined && value !== currentUser.clubImage) {
            return value.size <= FILE_SIZE;
          } else {
            return true;
          }
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (value !== undefined && value !== currentUser.clubImage) {
            return SUPPORTED_FORMATS.includes(value.type);
          } else {
            return true;
          }
        }),
    });

  const formik = useFormik({
    initialValues: { ...editFormDatas.initialValuesData },
    validationSchema: imageValidation,
    onSubmit: onSubmit,
  });

  const InputItems = (obj: IEditItems, note?: INoteItems) => {
    const element = Object.keys(editFormDatas.initialValuesData).map((key: string) => {
      return (
        <>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <FlexLayout
              justifyContent={JUSTIFYCONTENT.START}
              width={SIZE.XXXSMALL}
              alignItems={ALIGNITEMS.START}
              left={
                <Padding left={CLEAR.TINY}>
                  <StyledLabel htmlFor={key}>{obj[key as keyof IEditItems]}</StyledLabel>
                </Padding>
              }
              right={
                <Padding left={CLEAR.MEDIUM}>
                  <Center>
                    <StyledField
                      type={'file'}
                      accept={'image/*'}
                      name={key}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const file =
                          event.currentTarget.files !== null ? event.currentTarget.files[0] : null;
                        if (file === null) {
                          return;
                        }
                        formik.setFieldValue(key, file);
                        const reader = new FileReader();
                        reader.onload = () => {
                          key === 'clubImage'
                            ? editCImage(reader.result)
                            : editPImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {key === 'clubImage' ? <Image src={cImage} /> : <Image src={PImage} />}

                    {note === undefined ? <></> : <Inline>{note[key as keyof INoteItems]}</Inline>}
                    {formik.touched[key as keyof ImageUserType] &&
                    formik.errors[key as keyof ImageUserType] ? (
                      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                        <Styleddiv>{formik.errors[key as keyof ImageUserType]}</Styleddiv>
                      </Padding>
                    ) : null}
                  </Center>
                </Padding>
              }
            />
          </Padding>
        </>
      );
    });
    return element;
  };

  return (
    <Padding all={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
          <FormTitle>{editTitle}</FormTitle>
          {InputItems(baseItems, profileNoteItems)}
        </Padding>
        <FormSubmit>{buttonValue}</FormSubmit>
      </StyledForm>
    </Padding>
  );
};

export default ImageEditForm;
