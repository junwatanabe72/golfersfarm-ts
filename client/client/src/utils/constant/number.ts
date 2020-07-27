const FONT = {
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

export type fontWeightType = typeof FONT_WEIGHT.NORMAL | typeof FONT_WEIGHT.BOLD

export type fontType = typeof FONT.ICONXLARGE |
  typeof FONT.ICONLARGE |
  typeof FONT.XXXLARGE |
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