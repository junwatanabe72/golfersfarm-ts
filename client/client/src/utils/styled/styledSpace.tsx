import React from 'react';
import styled, { css } from 'styled-components';
import { CLEAR, CLEARTYPE}from "../constant/number";
type PaddingProps = {
  top?: CLEARTYPE,
  right?: CLEARTYPE,
  bottom?: CLEARTYPE,
  left?: CLEARTYPE,
  all?: CLEARTYPE,
};

 export const Padding = styled.div<PaddingProps>`
  padding-top: ${(props) => props.top}px;
  padding-right: ${(props) => props.right}px;
  padding-bottom: ${(props) => props.bottom}px;
  padding-left: ${(props) => props.left}px;
  padding: ${(props) => props.all}px;
`


export const PdComponent: React.FC<PaddingProps> = ({top,right,bottom,left,all,children}) => {
  return <Padding top={top} right={right} bottom={bottom} left={left} all={all}>{children}</Padding>;
}

// type MarginProps = {
//   top?: CLEARTYPE,
//   right?: CLEARTYPE,
//   bottom?: CLEARTYPE,
//   left?: CLEARTYPE,
//   all?: CLEARTYPE,
// };

// export const Margin = styled.div<MarginProps>`
//   margin-top: ${(props) => props.top}px;
//   margin-right: ${(props) => props.right}px;
//   margin-bottom: ${(props) => props.bottom}px;
//   margin-left: ${(props) => props.left}px;
//   margin: ${(props) => props.all}px;
// `

// export const MgComponent: React.FC<MarginProps> = ({ top, right, bottom, left,all, children }) => {
//   return <Margin top={top} right={right} bottom={bottom} left={left} all={all}>{children}</Margin>;
// }