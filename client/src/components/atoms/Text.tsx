import React from 'react';
import styled from 'styled-components';
import { CLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';

interface Props extends PartialFontSize, PartialAlignItemsType {
  text: string[];
}

const Container = styled.div<{ alignItems: Props['alignItems']; fontSize: Props['fontSize'] }>`
  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.alignItems};
`;

const Text: React.FC<Props> = ({
  text,
  fontSize = FONTSIZE.LARGE,
  alignItems = ALIGNITEMS.CENTER,
}) => {
  return (
    <Container fontSize={fontSize} alignItems={alignItems}>
      {text.map((t: string) => {
        return (
          <Padding key={t} bottom={CLEAR.TINY}>
            {t}
          </Padding>
        );
      })}
    </Container>
  );
};

export default Text;
