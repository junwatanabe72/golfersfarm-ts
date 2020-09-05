import React from 'react';
import styled, { css } from 'styled-components';
import { PaddingProps } from '../../@type/utils/space';

//  export const Padding = styled.div<PaddingProps>`
//   padding-top: ${(props) => props.top}px;
//   padding-right: ${(props) => props.right}px;
//   padding-bottom: ${(props) => props.bottom}px;
//   padding-left: ${(props) => props.left}px;
//   padding: ${(props) => props.all}px;
// `
export const Padding = styled.div<PaddingProps>`
  padding-top: ${(props) => props.top}vw;
  padding-right: ${(props) => props.right}vw;
  padding-bottom: ${(props) => props.bottom}vw;
  padding-left: ${(props) => props.left}vw;
  padding: ${(props) => props.all}vw;
`;

export const ALIGNITEMS = {
  CENTER: 'center',
  START: 'start',
  END: 'end',
} as const;

export const JUSTIFYCONTENT = {
  CENTER: 'center',
  START: 'start',
  BETWEEN: 'space-between',
  AROUND: 'space-around',
  EVENLY: 'space-evenly',
} as const;

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
