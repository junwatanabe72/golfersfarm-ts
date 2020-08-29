import React from 'react';
import styled from 'styled-components';
import { CLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { PartialIFONTSIZE } from '../../@type/utils/numer';

interface Props extends PartialIFONTSIZE {
  text: string[];
}

const Container = styled.div<PartialIFONTSIZE>`
  font-size: ${(props) => props.fontSize}px;
  text-align: center;
`;

const Text: React.FC<Props> = ({ text, fontSize = FONTSIZE.LARGE }) => {
  return (
    <Container fontSize={fontSize}>
      {text.map((t: string) => {
        return <Padding bottom={CLEAR.TINY}>{t}</Padding>;
      })}
    </Container>
  );
};

export default Text;
