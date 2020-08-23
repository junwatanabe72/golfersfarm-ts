import React from 'react';
import { SIZE, PartialIWIDTH, PartialIWIDTHTAB } from '../../utils/constant/number';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

interface Props extends PartialIWIDTH, PartialIWIDTHTAB {
  image: string | undefined;
}

const Container = styled.img<{
  width: Props['width'];
  widthTab: Props['widthTab'];
}>`
  width: ${(props) => props.width}vw;
  ${media.tablet`
        width: ${(props: { widthTab: PartialIWIDTHTAB }) => props.widthTab}vw
      `}
`;

const Image: React.FC<Props> = ({ width = SIZE.SMALL, widthTab = SIZE.LARGE, image }) => {
  return <Container width={width} widthTab={widthTab} src={image} />;
};

export default Image;
