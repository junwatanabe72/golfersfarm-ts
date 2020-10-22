import React from 'react';
import styled from 'styled-components';
import { media } from '../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';

interface ContactType {
  email: string;
  title: string;
  value: string;
}

interface Props {
  formik: any;
  valueKey: string;
}

const StyledField = styled.input`
  width: ${SIZE.SMALL}vw;
  font-size: ${FONTSIZE.LARGE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.MEDIUM}vw;
      `}
`;

const StyledFieldExtend = StyledField.withComponent('textarea');

const ContactItem: React.FC<Props> = ({ formik, valueKey }) => {
  const items = {
    value: (
      <StyledFieldExtend
        name={valueKey}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[valueKey as keyof ContactType]}
      />
    ),
    other: (
      <StyledField
        type={valueKey}
        name={valueKey}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[valueKey as keyof ContactType]}
      />
    ),
  };
  type Items = typeof items;
  return <>{items[valueKey as keyof Items] ? items[valueKey as keyof Items] : items['other']}</>;
};

export default ContactItem;
