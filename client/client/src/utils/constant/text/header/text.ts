import { IconName } from '@fortawesome/fontawesome-svg-core';
// header

const HeaderTitleText = {
  appTitle: "Golfersfarm",
} as const;

const HeaderMenuText = {
  head: 'fas',
  tail: 'bars',
} as const;

export const HeaderText = {
  HeaderMenuText,
  HeaderTitleText
};

export interface HEADERTITLETYPE{
  appTitle: typeof HeaderTitleText.appTitle
}

export interface HEADERMENUZTYPE {
  head: "fas" | "fab" | "far",
  tail: IconName,
}