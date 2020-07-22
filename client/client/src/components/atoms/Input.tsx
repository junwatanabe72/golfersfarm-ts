import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 12px 8px;
`;
const Frame = styled.div`
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
`;
const InputBar = styled.input`
  display: table-cell;
  width: 98%;
  padding: 8px;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

function Input({ placeHolder, value, onChange }) {
  return (
    <Container>
      <Frame>
        <InputBar placeholder={placeHolder} value={value} onChange={onChange} />
      </Frame>
    </Container>
  );
}

export default Input;
