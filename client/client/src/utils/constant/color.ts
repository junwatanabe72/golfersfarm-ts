const BASICCOLORS = {
  primary: "#00bcd4",
  primaryDark: "#008ba3",
  primaryLight: "#62efff",
  secondary: "#ff5722",
  secondaryDark: "#c41c00",
  secondaryLight: "#ff8a50",
  basic: "#546e7a",
  basicDark: "#29434e",
  basicLight: "#819ca9",
  white: "#f9f9f9",
  whiteDark: "#bcbcbc",
  whiteLight: "#ffffff",
  caution: "#4527a0",

} as const


export const defaultColors = {
  BASICCOLORS,
};

export type colorType = typeof BASICCOLORS.primary | 
                        typeof BASICCOLORS.primaryDark |
                        typeof BASICCOLORS.primaryLight |
                        typeof BASICCOLORS.secondary |
                        typeof BASICCOLORS.secondaryDark |
                        typeof BASICCOLORS.secondaryLight |
                        typeof BASICCOLORS.basic |
                        typeof BASICCOLORS.basicDark |
                        typeof BASICCOLORS.basicLight |
                        typeof BASICCOLORS.white |
                        typeof BASICCOLORS.whiteDark |
                        typeof BASICCOLORS.whiteLight;
  
