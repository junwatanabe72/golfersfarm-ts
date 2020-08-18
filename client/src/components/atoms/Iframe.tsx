import React from 'react';
import { SIZE, IWIDTHSIZE, IHEIGHTSIZE } from '../../utils/constant/number';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

type PartialIWIDTH = Partial<IWIDTHSIZE>;
type PartialIHEIGHTSIZE = Partial<IHEIGHTSIZE>;
interface IHEIGHTWIDTH {}

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
