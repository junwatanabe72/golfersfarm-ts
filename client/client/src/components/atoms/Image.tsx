import React from 'react';
import { WIDTH, IWIDTH} from "../../utils/constant/number"
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

type PartialIWIDTH = Partial<IWIDTH>

interface Props extends PartialIWIDTH{
  image: string,
} 

const Container = styled.img<{width: Props["width"]}>`
  width: ${(props) => props.width}vw;
  ${media.tablet`
        width: ${WIDTH.LARGE}vw;
      `}
`;

const Image: React.FC<Props> = ({ width=WIDTH.SMALL, image }) => {
  return <Container width={width} src={image} />;
};

export default Image;