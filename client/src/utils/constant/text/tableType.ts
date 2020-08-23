export const TABLETYPES = {
  HORIZONTAL: 'HORIZONTAL',
  VERTICAL: 'VERTICAL',
} as const;

export interface ITABLETYPES {
  type: typeof TABLETYPES.HORIZONTAL | typeof TABLETYPES.VERTICAL;
}
