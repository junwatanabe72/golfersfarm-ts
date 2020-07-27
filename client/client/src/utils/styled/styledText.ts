import styled, { css } from 'styled-components';


const FONT = {
  XXXLARGE: 32,
  XXLARGE: 24,
  XLARGE: 18,
  LARGE: 16,
  MEDIUM: 14,
  BASE: 12,
  SMALL: 11,
  XSMALL: 10,
  TINY: 8,
} as const

const IWIDTH = {
  XXXLARGE: 800,
  XXLARGE: 700,
  XLARGE: 600,
  LARGE: 500,
  MEDIUM: 400,
  BASE: 300,
  SMALL: 200,
  XSMALL: 100,
  TINY: 50,
} as const

const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 600,
} as const

const BORDER_RADIUS = 4 as 4

export const defaultSize = {
  FONT,
  IWIDTH,
  FONT_WEIGHT,
  BORDER_RADIUS
};

export type fontType = typeof FONT.XXXLARGE |
  typeof FONT.XXLARGE |
  typeof FONT.XLARGE |
  typeof FONT.LARGE |
  typeof FONT.MEDIUM |
  typeof FONT.LARGE |
  typeof FONT.BASE |
  typeof FONT.SMALL |
  typeof FONT.XSMALL |
  typeof FONT.TINY;

export type widthType = typeof IWIDTH.XXXLARGE |
  typeof IWIDTH.XXLARGE |
  typeof IWIDTH.XLARGE |
  typeof IWIDTH.LARGE |
  typeof IWIDTH.MEDIUM |
  typeof IWIDTH.LARGE |
  typeof IWIDTH.BASE |
  typeof IWIDTH.SMALL |
  typeof IWIDTH.XSMALL |
  typeof IWIDTH.TINY;
  
// export const Text = styled.span`
//   display: ${props => props.disp};
//   text-align: ${props => props.ta};
//   font-size: ${props => props.fs};
//   color: ${props => props.color};
//   font-weight: ${props => props.fw};
//   line-height: ${props => props.lh};
// `
// Text.defaultProps = {
//   "display": "inline",
//   "text-align": "left",
//   "font-size": "12px",
//   "color": "#4B5467",
//   "font-weight": "normal",
//   "line-height": "1px"
// }

// export const Border = styled.div`
//   border-top: ${(props) => props.top} solid ${(props) => props.color};
//   border-right: ${(props) => props.right} solid ${(props) => props.color};
//   border-bottom: ${(props) => props.bottom} solid ${(props) => props.color};
//   border-left: ${(props) => props.left} solid ${(props) => props.color};
// `
// Border.defaultProps = {
//   top: "0px",
//   right: "0px",
//   bottom: "0px",
//   left: "0px",
//   color: "#c9d2db"
// }

// export const Strong = styled.span`
//   font-size: ${props => props.fs};
//   color: ${props => props.color};
//   font-weight: 600;
// `
// Strong.defaultProps = {
//   "font-size": "14px",
//   "font-color": "#262626"
// }
