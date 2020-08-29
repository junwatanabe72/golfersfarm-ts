import { FONTSIZE, SIZE, CLEAR, FONTWEIGHT, BORDERRADIUS } from '../../../utils/constant/number';

//interface
interface IFONTSIZE {
  fontSize: FONTSIZETYPE;
}

interface IWIDTHSIZE {
  width: SIZETYPE;
}

interface IHEIGHTSIZE {
  height: SIZETYPE;
}

interface IWIDTHTAB {
  widthTab: SIZETYPE;
}

interface IFONTSIZEWEIGHT {
  fontWeight: FONTSIZEWEIGHTTYPE;
}

interface ICLEAR {
  clear: CLEARTYPE;
}
// types

type FONTSIZEWEIGHTTYPE = typeof FONTWEIGHT.NORMAL | typeof FONTWEIGHT.BOLD;

type FONTSIZETYPE =
  | typeof FONTSIZE.ICONXLARGE
  | typeof FONTSIZE.ICONLARGE
  | typeof FONTSIZE.XXXLARGE
  | typeof FONTSIZE.XXLARGE
  | typeof FONTSIZE.XLARGE
  | typeof FONTSIZE.LARGE
  | typeof FONTSIZE.MEDIUM
  | typeof FONTSIZE.LARGE
  | typeof FONTSIZE.BASE
  | typeof FONTSIZE.SMALL
  | typeof FONTSIZE.XSMALL
  | typeof FONTSIZE.TINY;

type SIZETYPE =
  | typeof SIZE.MAX
  | typeof SIZE.XXXLARGE
  | typeof SIZE.XXLARGE
  | typeof SIZE.XLARGE
  | typeof SIZE.LARGE
  | typeof SIZE.MEDIUMLARGE
  | typeof SIZE.MEDIUM
  | typeof SIZE.LARGE
  | typeof SIZE.BASE
  | typeof SIZE.BASESMALL
  | typeof SIZE.SMALL
  | typeof SIZE.SXMALL
  | typeof SIZE.XSMALL
  | typeof SIZE.XSMALLMD
  | typeof SIZE.XXSMALL
  | typeof SIZE.XXXSMALL
  | typeof SIZE.TINY;

type CLEARTYPE =
  | typeof CLEAR.XXXLARGE
  | typeof CLEAR.XXLARGE
  | typeof CLEAR.GXLARGE
  | typeof CLEAR.XLARGE
  | typeof CLEAR.LARGE
  | typeof CLEAR.MEDIUMLARGE
  | typeof CLEAR.MEDIUM
  | typeof CLEAR.LARGE
  | typeof CLEAR.BASE
  | typeof CLEAR.SMALL
  | typeof CLEAR.XSMALL
  | typeof CLEAR.TINY
  | typeof CLEAR.ZERO;

// partial
type PartialIWIDTH = Partial<IWIDTHSIZE>;
type PartialIHEIGHTSIZE = Partial<IHEIGHTSIZE>;
type PartialIWIDTHTAB = Partial<IWIDTHTAB>;
type PartialICLEAR = Partial<ICLEAR>;
type PartialIFONTSIZE = Partial<IFONTSIZE>;
type PartialIFONTSIZEWEIGHT = Partial<IFONTSIZEWEIGHT>;
