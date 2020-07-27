import React from 'react';
import { defaultSize, widthType } from "../../utils/styled/styledText"
import styled from 'styled-components';

interface ImageProps {
  width?: widthType,
  image?: string,
} 

const Container = styled.img< { width?: widthType}>`
  width: ${(props) => props.width};
`;

const Image: React.FC<ImageProps> = ({ width = defaultSize.IWIDTH.SMALL, image }) => {
  return <Container width={width} src={image} />;
};

export default Image;