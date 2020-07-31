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

export const IMAGEWIDTH = {
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

export const CLEAR = {
  XXXLARGE: 96,
  XXLARGE: 80,
  XLARGE: 64,
  LARGE: 56,
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

export type WIDTHTYPE = typeof IMAGEWIDTH.XXXLARGE |
  typeof IMAGEWIDTH.XXLARGE |
  typeof IMAGEWIDTH.XLARGE |
  typeof IMAGEWIDTH.LARGE |
  typeof IMAGEWIDTH.MEDIUM |
  typeof IMAGEWIDTH.LARGE |
  typeof IMAGEWIDTH.BASE |
  typeof IMAGEWIDTH.SMALL |
  typeof IMAGEWIDTH.XSMALL |
  typeof IMAGEWIDTH.TINY;

export type CLEARTYPE = typeof CLEAR.XXXLARGE |
  typeof CLEAR.XXLARGE |
  typeof CLEAR.XLARGE |
  typeof CLEAR.LARGE |
  typeof CLEAR.MEDIUM |
  typeof CLEAR.LARGE |
  typeof CLEAR.BASE |
  typeof CLEAR.SMALL |
  typeof CLEAR.XSMALL |
  typeof CLEAR.TINY;