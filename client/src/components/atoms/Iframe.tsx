import React from 'react';
import { WIDTH, IWIDTH, WIDTHTYPE } from "../../utils/constant/number"
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

type PartialIWIDTH = Partial<IWIDTH>

interface IHEIGHTWIDTH {
  height?: WIDTHTYPE
}

interface Props extends PartialIWIDTH, IHEIGHTWIDTH {
  source: string,
}

const Container = styled.iframe<{ width: Props["width"], height: Props["height"]}>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  ${media.tablet`
        width: ${WIDTH.MEDIUM}vw;
        height: ${WIDTH.MEDIUM}vw;
      `}
`;

const Iframe: React.FC<Props> = ({ source, width = WIDTH.XSMALL, height = WIDTH.XSMALL}) => {
  return <Container width={width} src={source} height={height} frameBorder="0" />;
};

export default Iframe;