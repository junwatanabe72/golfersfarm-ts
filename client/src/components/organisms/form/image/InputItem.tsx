import React, { useState } from 'react';
import styled from 'styled-components';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import FlexLayout from '../../../atoms/FlexLayout';

interface Props {
  formik: any;
  label: string;
  pKey: string;
  note: string;
  currentUser: UserObjectType;
}

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
const StyledImage = styled.img`
  width: ${SIZE.XXSMALL}vw;
  ${media.tablet`
        width: ${SIZE.SMALL}vw
      `}
`;

const InputItem: React.FC<Props> = ({ formik, label, pKey, currentUser, note }) => {
  const [targetImage, setImage] = useState<any>(currentUser[pKey as keyof UserObjectType]);
  const editImage = (value: string | ArrayBuffer | null) => {
    setImage(value);
  };
  return (
    <>
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <FlexLayout
          justifyContent={JUSTIFYCONTENT.START}
          width={SIZE.XXXSMALL}
          alignItems={ALIGNITEMS.START}
          left={
            <Padding left={CLEAR.TINY}>
              <StyledLabel htmlFor={pKey}>{label}</StyledLabel>
            </Padding>
          }
          right={
            <Padding left={CLEAR.MEDIUM}>
              <Center>
                <StyledField
                  type={'file'}
                  accept={'image/*'}
                  name={pKey}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file =
                      event.currentTarget.files !== null ? event.currentTarget.files[0] : null;
                    if (file === null) {
                      return;
                    }
                    formik.setFieldValue(pKey, file);
                    const reader = new FileReader();
                    reader.onload = () => {
                      editImage(reader.result);
                    };
                    if (file) {
                      reader.readAsDataURL(file);
                    }
                  }}
                  onBlur={formik.handleBlur}
                />
                <StyledImage src={targetImage} />
                {note === undefined ? <></> : <Inline>{note}</Inline>}
                {formik.touched[pKey as keyof ImageUserType] &&
                formik.errors[pKey as keyof ImageUserType] ? (
                  <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                    <Styleddiv>{formik.errors[pKey as keyof ImageUserType]}</Styleddiv>
                  </Padding>
                ) : null}
              </Center>
            </Padding>
          }
        />
      </Padding>
    </>
  );
};

export default InputItem;
