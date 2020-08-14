import { IconName } from '@fortawesome/fontawesome-svg-core';

export const FONTAWEICON = {
  question: {
    head: 'fas',
    tail: 'question',
  },
  twitter: {
    head: 'fab',
    tail: 'twitter',
  },
  facebook: {
    head: 'fab',
    tail: 'facebook',
  },
  instagram: {
    head: 'fab',
    tail: 'instagram',
  },
  youtube: {
    head: 'fab',
    tail: 'youtube',
  },
  bar: {
    head: 'fas',
    tail: 'bars',
  },
} as const;

export interface MENUZTYPE {
  head: "fas" | "fab" | "far",
  tail: IconName,
}