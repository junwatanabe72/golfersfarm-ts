import { ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { CLEARTYPE } from '../numer';

type PaddingProps = {
  top?: CLEARTYPE;
  right?: CLEARTYPE;
  bottom?: CLEARTYPE;
  left?: CLEARTYPE;
  all?: CLEARTYPE;
};

type ALIGNITEMSTYPE = typeof ALIGNITEMS.CENTER | typeof ALIGNITEMS.START | typeof ALIGNITEMS.END;

interface IALIGNITEMSTYPE {
  alignItems: ALIGNITEMSTYPE;
}

interface ITEXTALIGNTYPE {
  textAlign: ALIGNITEMSTYPE;
}

type PartialIALIGNITEMSTYPE = Partial<IALIGNITEMSTYPE>;
type PartialITEXTALIGNTYPE = Partial<ITEXTALIGNTYPE>;
