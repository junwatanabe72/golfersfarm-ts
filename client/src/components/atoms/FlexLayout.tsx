import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';
import { JUSTIFYCONTENT } from '../../utils/styled/styledSpace';

interface Props extends PartialIWIDTH, PartialIALIGNITEMSTYPE, PartialIJUSTIFYCONTENTTYPE {
  right: ReactElement;
  left: ReactElement;
}

const Container = styled.div<{
  alignItems: Props['alignItems'];
  justifyContent: Props['justifyContent'];
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
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

const FlexLayout: React.FC<Props> = ({
  right,
  left,
  width,
  alignItems,
  justifyContent = JUSTIFYCONTENT.AROUND,
}) => {
  return (
    <Container alignItems={alignItems} justifyContent={justifyContent}>
      <FixedWidth width={width}>{left}</FixedWidth>
      {right}
    </Container>
  );
};

export default FlexLayout;
