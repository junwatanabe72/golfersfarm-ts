type PaddingProps = {
  top?: CLEARTYPE;
  right?: CLEARTYPE;
  bottom?: CLEARTYPE;
  left?: CLEARTYPE;
  all?: CLEARTYPE;
};

type ALIGNITEMSTYPE = typeof ALIGNITEMS.CENTER | typeof ALIGNITEMS.START | typeof ALIGNITEMS.END;
type JUSTIFYCONTENTTYPE =
  | typeof JUSTIFYCONTENT.CENTER
  | typeof JUSTIFYCONTENT.START
  | typeof JUSTIFYCONTENT.BETWEEN
  | typeof JUSTIFYCONTENT.AROUND
  | typeof JUSTIFYCONTENT.EVENLY;

interface IJUSTIFYCONTENTTYPE {
  justifyContent: JUSTIFYCONTENTTYPE;
}

interface IALIGNITEMSTYPE {
  alignItems: ALIGNITEMSTYPE;
}

interface ITEXTALIGNTYPE {
  textAlign: ALIGNITEMSTYPE;
}
type PartialIJUSTIFYCONTENTTYPE = Partial<IJUSTIFYCONTENTTYPE>;
type PartialIALIGNITEMSTYPE = Partial<IALIGNITEMSTYPE>;
type PartialITEXTALIGNTYPE = Partial<ITEXTALIGNTYPE>;

const ALIGNITEMS = {
  CENTER: 'center',
  START: 'start',
  END: 'end',
} as const;

const JUSTIFYCONTENT = {
  CENTER: 'center',
  START: 'start',
  BETWEEN: 'space-between',
  AROUND: 'space-around',
  EVENLY: 'space-evenly',
} as const;
