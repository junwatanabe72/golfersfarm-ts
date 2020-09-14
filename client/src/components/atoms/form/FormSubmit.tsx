import React from 'react';
import styled from 'styled-components';
import { Padding } from '../../../utils/styled/styledSpace';
import { CLEAR } from '../../../utils/constant/number';
import Button from '../Button';

interface Props {}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const FormSubmit: React.FC<Props> = ({ children }) => {
  return (
    <Center>
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <StyledButton type="submit">
          <Button pWidth={CLEAR.LARGE}>{children}</Button>
        </StyledButton>
      </Padding>
    </Center>
  );
};

export default FormSubmit;
