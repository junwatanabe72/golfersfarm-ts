import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { SIZE } from '../../utils/constant/number';
import { PartialIWIDTH } from '../../@type/utils/numer';

interface Props extends PartialIWIDTH {
  image: string;
}

const FixedColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledA = styled.a`
  text-align: center;
`;

const FreePick: React.FC<Props> = ({ image, width = SIZE.SMALL }) => {
  return (
    <FixedColumn>
      <Image image={image} width={width} />
      <StyledA href="http://www.freepik.com">Designed by macrovector / Freepik</StyledA>
    </FixedColumn>
  );
};

export default FreePick;
