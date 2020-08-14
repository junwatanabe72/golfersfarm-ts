import React from 'react';
import { WIDTH, IWIDTH, WIDTHTYPE} from "../../utils/constant/number"
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

type PartialIWIDTH = Partial<IWIDTH>

interface Props extends PartialIWIDTH{
  image: string,
  widthTab?: WIDTHTYPE,
} 

const Container = styled.img<{ width: Props["width"], widthTab: Props["widthTab"]}>`
  width: ${(props) => props.width}vw;
  ${media.tablet`
        width: ${(props: { widthTab: WIDTHTYPE; }) => props.widthTab}vw
      `}
`;

const Image: React.FC<Props> = ({ width = WIDTH.SMALL, widthTab = WIDTH.LARGE, image }) => {
  return <Container width={width} widthTab={widthTab} src={image} />;
};

export default Image;