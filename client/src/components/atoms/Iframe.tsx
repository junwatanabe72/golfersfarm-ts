import React from 'react';
import { SIZE } from '../../utils/constant/number';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';
import { PartialIWIDTH, PartialIHEIGHTSIZE } from '../../@type/utils/numer';

interface Props extends PartialIWIDTH, PartialIHEIGHTSIZE {
  source: string;
}

const Container = styled.iframe<{ width: Props['width']; height: Props['height'] }>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  ${media.tablet`
        width: ${SIZE.MEDIUM}vw;
        height: ${SIZE.MEDIUM}vw;
      `}
`;

const Iframe: React.FC<Props> = ({ source, width = SIZE.XSMALL, height = SIZE.XSMALL }) => {
  return <Container width={width} src={source} height={height} frameBorder="0" />;
};

export default Iframe;
