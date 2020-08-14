
// header

const HeaderTitleText = {
  appTitle: "Golfersfarm",
} as const;



export const HeaderText = {
  HeaderTitleText
};

export interface HEADERTITLETYPE{
  appTitle: typeof HeaderTitleText.appTitle
}
