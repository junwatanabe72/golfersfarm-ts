import React from 'react';
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
import { baseUser } from '../../../utils/constant/text/body/user/value';

type ISelectItems = typeof selectProfileItems | typeof selectGolfItems;
type IEditItems = typeof baseItems | typeof snsItems | typeof golfItems | typeof otherItems;
type INoteItems = typeof snsNoteItems | typeof profileNoteItems;

interface Props {
  currentUser: UserObjectType;
  onSubmit: (values: ProfileEditInitialValuesDataType) => void;
}

const StyledForm = styled.form``;

const StyledField = styled.input`
  width: ${SIZE.SMALL}vw;
  font-size: ${FONTSIZE.LARGE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;
const StyledSelect = styled.select`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
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
  justify-content: center;
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

const baseItems = {
  name: '名前',
  email: 'メールアドレス',
};
const snsItems = {
  twitter: 'twitterアカウント',
  instagram: 'instagramアカウント',
  youtube: 'youtubeアカウント',
  facebook: 'facebookアカウント',
};
const golfItems = {
  homeCource: 'ホームコース',
};
const otherItems = {
  residence: '現住所',
  birthPlace: '出生地',
  job: '職業',
  school: '出身校',
  hobby: '趣味',
};
let iniScore = 54;
const bScore = [...Array(82)].map((_, i) => {
  return iniScore + i;
});
let iniDistance = 150;
const aDistance = [...Array(21)].map((_, i) => {
  return iniDistance + i * 10;
});
const selectGolfItems = {
  bestScore: { head: 'ベストスコア', body: bScore },
  averageDistance: { head: '平均飛距離', body: aDistance },
};
const selectProfileItems = {
  sex: { head: '性別', body: ['男性', '女性'] },
  show: { head: '公開・非公開', body: ['公開', '非公開'] },
};

const snsNoteItems = {
  twitter: 'twitter.com/後のアカウント名。',
  instagram: 'www.instagram.com/後のアカウント名。',
  youtube: 'www.youtube.com/channel/後のアカウント名。',
  facebook: 'www.facebook.com/後のアカウント名。',
};
const profileNoteItems = {
  show: 'ログインユーザーのみに情報が公開されます。',
};

const editTitles = ['基本情報', 'ゴルフ', 'SNS', 'その他'];

const buttonValue = 'プロフィールを編集する。';

const profileValidation = () =>
  yup.object().shape({
    email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
    name: yup.string().required('必須項目です'),
  });

const UserEditForm: React.FC<Props> = ({ currentUser, onSubmit }) => {
  const showValue = currentUser.show
    ? selectProfileItems.show.body[0]
    : selectProfileItems.show.body[1];
  const profileEditFormDatas = {
    initialValuesData: {
      ...currentUser,
      show: showValue,
      confirmedPassword: currentUser.password,
    },
    placeHolder: {
      ...baseUser,
      password: '英数字８字以上のパスワード',
      confirmedPassword: '確認用パスワード',
    },
  };
  const formik = useFormik({
    initialValues: { ...profileEditFormDatas.initialValuesData },
    validationSchema: profileValidation,
    onSubmit: onSubmit,
  });

  const selectItems = (obj: ISelectItems, note?: INoteItems) => {
    const element = Object.entries(obj).map(([key, value]) => {
      const { head, body } = value;
      return (
        <>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <FlexLayout
              justifyContent={JUSTIFYCONTENT.START}
              width={SIZE.XXXSMALL}
              alignItems={ALIGNITEMS.START}
              left={
                <Padding left={CLEAR.TINY}>
                  <StyledLabel htmlFor={key}>{head}</StyledLabel>
                </Padding>
              }
              right={
                <Padding left={CLEAR.MEDIUM}>
                  <StyledSelect name={key} onChange={formik.handleChange}>
                    <option value={formik.values[key as keyof UserObjectType]}>
                      {formik.values[key as keyof UserObjectType]}
                    </option>
                    {body.map((data: any) => {
                      return formik.values[key as keyof UserObjectType] !== data ? (
                        <option value={data}>{data}</option>
                      ) : null;
                    })}
                  </StyledSelect>
                  {note === undefined ? <></> : <Inline>{note[key as keyof INoteItems]}</Inline>}
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
    });
    return element;
  };

  const InputItems = (obj: IEditItems, note?: INoteItems) => {
    const keyItems = Object.keys(obj).map((key: string) => {
      return key;
    });
    const element = Object.entries(profileEditFormDatas.placeHolder).map(
      ([key, value]: string[]) => {
        return keyItems.includes(key) ? (
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
                    <StyledField
                      type={key}
                      name={key}
                      placeholder={value}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[key as keyof UserObjectType]}
                    />
                    {note === undefined ? <></> : <Inline>{note[key as keyof INoteItems]}</Inline>}
                  </Padding>
                }
              />
            </Padding>
            {formik.touched[key as keyof UserObjectType] &&
            formik.errors[key as keyof UserObjectType] ? (
              <Styleddiv>{formik.errors[key as keyof UserObjectType]}</Styleddiv>
            ) : null}
          </>
        ) : (
          <></>
        );
      }
    );
    return element;
  };

  const editElements = [
    <>
      {InputItems(baseItems)}
      {selectItems(selectProfileItems, profileNoteItems)}
    </>,
    <>
      {InputItems(golfItems)}
      {selectItems(selectGolfItems)}
    </>,
    <>{InputItems(snsItems, snsNoteItems)}</>,
    <>{InputItems(otherItems)}</>,
  ];

  const editTitleElemensts = editElements.map((element, i) => {
    return i === 0 ? (
      <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
        <Logo fontSize={FONTSIZE.XLARGE} textAlign={ALIGNITEMS.START}>
          <ExtendPadding all={CLEAR.TINY}>{editTitles[i]}</ExtendPadding>
        </Logo>
        {element}
      </Padding>
    ) : (
      <Padding bottom={CLEAR.SMALL}>
        <Logo fontSize={FONTSIZE.XLARGE} textAlign={ALIGNITEMS.START}>
          <ExtendPadding all={CLEAR.TINY}>{editTitles[i]}</ExtendPadding>
        </Logo>
        {element}
      </Padding>
    );
  });

  return (
    <Padding all={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        {editTitleElemensts}
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

export default UserEditForm;
