// contant
    export const FONTSIZE = {
      ICONXLARGE: 60,
      ICONLARGE: 50,
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

    export const WIDTH = {
      MAX: 100,
      XXXLARGE: 90,
      XXLARGE: 80,
      XLARGE: 70,
      LARGE: 60,
      MEDIUMLARGE: 55,
      MEDIUM: 50,
      BASE: 40,
      BASESMALL: 35,
      SMALL: 30,
      SXMALL: 25,
      XSMALL: 20,
      TINY: 10,
    } as const


// export const WIDTH = {
//   XXXLARGE: 800,
//   XXLARGE: 700,
//   XLARGE: 600,
//   LARGE: 500,
//   MEDIUM: 400,
//   BASE: 300,
//   SMALL: 200,
//   XSMALL: 100,
//   TINY: 50,
// } as const


    export const CLEAR = {
      XXXLARGE: 96,
      XXLARGE: 80,
      GXLARGE: 72,
      XLARGE: 64,
      LARGE: 56,
      MEDIUMLARGE: 48,
      MEDIUM: 32,
      BASE: 24,
      SMALL: 16,
      XSMALL: 8,
      TINY: 4,
    } as const

    export const FONTWEIGHT = {
      NORMAL: 400,
      BOLD: 600,
    } as const

    export const BORDERRADIUS = 4 as 4


//interface
export interface IFONTSIZE {
  fontSize: FONTSIZETYPE
}

export interface IWIDTH {
  width: WIDTHTYPE
}

export interface VWWIDTH {
  vwWidth: CLEARTYPE
}

export interface IFONTSIZEWEIGHT {
  fontWeight: FONTSIZEWEIGHTTYPE
}

export interface ICLEAR {
  clear: CLEARTYPE
}
// types
export type FONTSIZEWEIGHTTYPE = typeof FONTWEIGHT.NORMAL | typeof FONTWEIGHT.BOLD

export type FONTSIZETYPE = typeof FONTSIZE.ICONXLARGE |
  typeof FONTSIZE.ICONLARGE |
  typeof FONTSIZE.XXXLARGE |
  typeof FONTSIZE.XXLARGE |
  typeof FONTSIZE.XLARGE |
  typeof FONTSIZE.LARGE |
  typeof FONTSIZE.MEDIUM |
  typeof FONTSIZE.LARGE |
  typeof FONTSIZE.BASE |
  typeof FONTSIZE.SMALL |
  typeof FONTSIZE.XSMALL |
  typeof FONTSIZE.TINY;


export type WIDTHTYPE = typeof WIDTH.MAX |
typeof WIDTH.XXXLARGE |
  typeof WIDTH.XXLARGE |
  typeof WIDTH.XLARGE |
  typeof WIDTH.LARGE |
  typeof WIDTH.MEDIUMLARGE |
  typeof WIDTH.MEDIUM |
  typeof WIDTH.LARGE |
  typeof WIDTH.BASE |
  typeof WIDTH.BASESMALL | 
  typeof WIDTH.SMALL |
  typeof WIDTH.SXMALL |
  typeof WIDTH.XSMALL |
  typeof WIDTH.TINY;

export type CLEARTYPE = typeof CLEAR.XXXLARGE |
  typeof CLEAR.XXLARGE |
  typeof CLEAR.GXLARGE | 
  typeof CLEAR.XLARGE |
  typeof CLEAR.LARGE |
  typeof CLEAR.MEDIUMLARGE |
  typeof CLEAR.MEDIUM |
  typeof CLEAR.LARGE |
  typeof CLEAR.BASE |
  typeof CLEAR.SMALL |
  typeof CLEAR.XSMALL |
  typeof CLEAR.TINY;