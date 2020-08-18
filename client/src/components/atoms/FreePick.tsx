import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { IWIDTHSIZE } from '../../utils/constant/number';

interface Props extends IWIDTHSIZE {
  image: string;
}

const FixedColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledA = styled.a`
  text-align: center;
`;

const FreePick: React.FC<Props> = ({ image, width }) => {
  return (
    <FixedColumn>
      <Image image={image} width={width} />
      <StyledA href="http://www.freepik.com">Designed by macrovector / Freepik</StyledA>
    </FixedColumn>
  );
};

export default FreePick;
