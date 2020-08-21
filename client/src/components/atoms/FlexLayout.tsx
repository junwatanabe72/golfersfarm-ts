import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PartialIWIDTH } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
import { PartialIALIGNITEMSTYPE } from '../../utils/styled/styledSpace';

interface Props extends PartialIWIDTH, PartialIALIGNITEMSTYPE {
  right: ReactElement;
  left: ReactElement;
}

const Container = styled.div<PartialIALIGNITEMSTYPE>`
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => props.alignItems};
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedWidth = styled.div<PartialIWIDTH>`
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
