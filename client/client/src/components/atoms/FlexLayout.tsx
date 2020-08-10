import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IWIDTH,WIDTH } from "../../utils/constant/number";
import { media } from '../../utils/styled/styledRdesign';

interface Props extends IWIDTH {
  right: ReactElement,
  left: ReactElement,
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedWidth = styled.div<{ width: Props["width"]}>`
  width: ${(props) => props.width}vw;
`;

const TopTitle: React.FC<Props>= ({right,left,width=WIDTH.MEDIUM}) => {
  return (
    <Container>
      <FixedWidth width={width}>
        {left}
      </FixedWidth>
        {right}
    </Container>
  )
}

export default TopTitle;