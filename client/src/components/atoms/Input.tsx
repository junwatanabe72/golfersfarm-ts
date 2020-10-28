import React from 'react';
import styled from 'styled-components';
import { SIZE, FONTSIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';

interface InputProps {
  placeHolder?: string;
  value?: string;
  onChange: (e: any) => void;
  type: string;
}

const Container = styled.div`
  ${media.tablet`
      width: ${SIZE.MEDIUM}vw;
      `}
`;
const Frame = styled.div`
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
`;
const InputBar = styled.input`
  display: table-cell;
  font-size: ${FONTSIZE.MEDIUM}px;
  width: 98%;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

const Input: React.FC<InputProps> = ({ placeHolder = '', value, onChange, type }) => {
  return (
    <Container>
      <Frame>
        <InputBar type={type} placeholder={placeHolder} value={value} onChange={onChange} />
      </Frame>
    </Container>
  );
};

export default Input;
