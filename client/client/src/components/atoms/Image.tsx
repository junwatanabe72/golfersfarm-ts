import React from 'react';
import { IMAGEWIDTH, WIDTHTYPE} from "../../utils/constant/number"
import styled from 'styled-components';

interface ImageProps {
  width?: WIDTHTYPE,
  image: string,
} 

const Container = styled.img< { width?: WIDTHTYPE}>`
  width: ${(props) => props.width};
`;

const Image: React.FC<ImageProps> = ({ width = IMAGEWIDTH.SMALL, image }) => {
  return <Container width={width} src={image} />;
};

export default Image;