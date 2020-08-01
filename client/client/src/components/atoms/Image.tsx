import React from 'react';
import { IMAGEWIDTH, IWIDTH} from "../../utils/constant/number"
import styled from 'styled-components';

type PartialIWIDTH = Partial<IWIDTH>

interface Props extends PartialIWIDTH{
  image: string,
} 

const Container = styled.img<{width: Props["width"]}>`
  width: ${(props) => props.width}px;
`;

const Image: React.FC<Props> = ({ width=IMAGEWIDTH.MEDIUM, image }) => {
  return <Container width={width} src={image} />;
};

export default Image;