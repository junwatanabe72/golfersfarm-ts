import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { IWIDTHSIZE, SIZE } from '../../utils/constant/number';

type PartialIWIDTH = Partial<IWIDTHSIZE>;
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
