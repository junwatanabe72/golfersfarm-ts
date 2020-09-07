import React, { useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from '../../atoms/Button';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { BASICCOLORS } from '../../../utils/constant/color';
import Logo from '../../atoms/Logo';
import FlexLayout from '../../atoms/FlexLayout';

type IEditItems = typeof baseItems;
type INoteItems = typeof profileNoteItems;

interface Props {
  currentUser: UserObjectType;
  onSubmit: (values: PartialUserObjectType) => void;
}

const StyledForm = styled.form``;

const StyledField = styled.input`
  font-size: ${FONTSIZE.SMALL}px;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
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
const ExtendPadding = styled(Padding)`
  border-bottom: 1px solid #ccc;
`;

const Image = styled.img`
  width: ${SIZE.XXSMALL}vw;
  ${media.tablet`
        width: ${SIZE.SMALL}vw
      `}
`;
const baseItems = {
  profileImage: 'プロフィールイメージ',
  clubImage: 'クラブティングイメージ',
};

const profileNoteItems = {
  profileImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
  clubImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
};

const buttonValue = 'イメージを編集する。';

const profileValidation = () =>
  yup.object().shape({
    email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
    name: yup.string().required('必須項目です'),
  });

const ImageEditForm: React.FC<Props> = ({ currentUser, onSubmit }) => {
  const [cImage, setCImage] = useState<any>(currentUser.clubImage);
  const [PImage, setPImage] = useState<any>(currentUser.profileImage);
  const editCImage = (value: any) => {
    setCImage(value);
  };
  const editPImage = (value: any) => {
    setPImage(value);
  };
  const profileEditFormDatas = {
    initialValuesData: {
      profileImage: currentUser.profileImage,
      clubImage: currentUser.clubImage,
    },
    placeHolder: {
      profileImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
      clubImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
    },
  };

  const formik = useFormik({
    initialValues: { ...profileEditFormDatas.initialValuesData },
    // validationSchema: profileValidation,
    onSubmit: onSubmit,
  });

  const InputItems = (obj: IEditItems, note?: INoteItems) => {
    const element = Object.entries(profileEditFormDatas.placeHolder).map(
      ([key, value]: string[]) => {
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
                        placeholder={value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const file =
                            event.currentTarget.files !== null
                              ? event.currentTarget.files[0]
                              : null;
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

                      {note === undefined ? (
                        <></>
                      ) : (
                        <Inline>{note[key as keyof INoteItems]}</Inline>
                      )}
                    </Center>
                  </Padding>
                }
              />
            </Padding>
            {formik.touched[key as keyof UserObjectType] &&
            formik.errors[key as keyof UserObjectType] ? (
              <Styleddiv>{formik.errors[key as keyof UserObjectType]}</Styleddiv>
            ) : null}
          </>
        );
      }
    );
    return element;
  };
  // console.log(formik.values);
  return (
    <Padding all={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
          <Logo fontSize={FONTSIZE.XLARGE} textAlign={ALIGNITEMS.START}>
            <ExtendPadding all={CLEAR.TINY}>イメージ</ExtendPadding>
          </Logo>
          {InputItems(baseItems, profileNoteItems)}
        </Padding>
        <Center>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <StyledButton type="submit">
              <Button pWidth={CLEAR.LARGE}>{buttonValue}</Button>
            </StyledButton>
          </Padding>
        </Center>
      </StyledForm>
    </Padding>
  );
};

export default ImageEditForm;
