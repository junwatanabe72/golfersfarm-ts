import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IWIDTHSIZE, SIZE, CLEAR } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
import { Padding, ALIGNITEMS, ALIGNITEMSTYPE } from '../../utils/styled/styledSpace';
import { BASICCOLORS, ICOLOR, COLORTYPES } from '../../utils/constant/color';

type PartialIWIDTH = Partial<IWIDTHSIZE>;
interface Props extends PartialIWIDTH {
  right: ReactElement;
  left: ReactElement;
  alignItems?: ALIGNITEMSTYPE;
}

const Container = styled.div<{ alignItems?: ALIGNITEMSTYPE }>`
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => props.alignItems};
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedWidth = styled.div<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  ${media.tablet`
      width: 60vw;
      padding-bottom: 10px;
      `}
`;

const FlexLayout: React.FC<Props> = ({ right, left, width, alignItems }) => {
  return (
    <Container alignItems={alignItems}>
      <FixedWidth width={width}>{left}</FixedWidth>
      {right}
    </Container>
  );
};

export default FlexLayout;
