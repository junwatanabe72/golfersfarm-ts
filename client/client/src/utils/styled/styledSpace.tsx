import React from 'react';
import styled, { css } from 'styled-components';

type PaddingProps = {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
};

 const Padding = styled.div<PaddingProps>`
  padding-top: ${(props) => props.top}px;
  padding-right: ${(props) => props.right}px;
  padding-bottom: ${(props) => props.bottom}px;
  padding-left: ${(props) => props.left}px;
`
Padding.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export const PdComponent: React.FC<PaddingProps> = ({top,right,bottom,left,children}) => {
return <Padding top={top} right={right} bottom={bottom} left={left}>{children}</Padding>;
}

type MarginProps = {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
};

export const Margin = styled.div<MarginProps>`
  margin-top: ${(props) => props.top}px;
  margin-right: ${(props) => props.right}px;
  margin-bottom: ${(props) => props.bottom}px;
  margin-left: ${(props) => props.left}px;
`
Margin.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export const MgComponent: React.FC<MarginProps> = ({ top, right, bottom, left, children }) => {
  return <Margin top={top} right={right} bottom={bottom} left={left}>{children}</Margin>;
}