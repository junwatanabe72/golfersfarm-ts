const TitleText: string[] = [
  "Golfersfarmはゴルファーのためのプロフィール公開ツールです。",
  "「無料」で使えて、操作も簡単です。",
  "さあ、今すぐ登録をしよう！",
  "Enjoy your Golf life!!",
]
const TitleTitle = "あなたのゴルフライフを公開しよう！";
const TitleLink ="今すぐ無料登録する";

const ConceptLink = "Golfersfarmを始める";
const ConceptText: string[] = [
  "Golfersfarmはこれまでになかったゴルファーのためのアプリケーションです。",
  "ゴルフの醍醐味は、スコアだけではありません。",
  "Golfersfarmでは、ツアープロのようにあなたのクラブセッティングやスウィング動画などを登録できます。",
  "あなたのこだわりや努力を全世界に向けて、公開しましょう！",
];

const ConceptTitle= "ゴルフを、もっと楽しく";

export const TopConceptText={
  ConceptText,
  ConceptTitle,
  ConceptLink,
}
export const TopTitleText = {
  TitleTitle,
  TitleText,
  TitleLink,
}
export const UsageItem: string[] = [
  "PROFILE",
  "GEARS",
  "RESULTS",
  "SWING",
  "SCORES",
]

export const UsageTitle ="Golfersfarmに登録すると、何が出来るの？";

export const TopUsageText = {
  UsageItem,
  UsageTitle
}

export type ITEXTTYPE = typeof TopTitleText.TitleText |
                        typeof TopConceptText.ConceptText;


export interface TOPTITLETYPE {
  TitleTitle: typeof TopTitleText.TitleTitle
  TitleText: typeof TopTitleText.TitleText
  TitleLink: typeof TopTitleText.TitleLink
}

export interface TOPCONCEPTTYPE {
  ConceptText: typeof TopConceptText.ConceptText,
  ConceptTitle: typeof TopConceptText.ConceptTitle
  ConceptLink: typeof TopConceptText.ConceptLink,
}
export interface TOPUSAGETYPE {
  UsageTitle: typeof TopUsageText.UsageTitle
  UsageItem: typeof TopUsageText.UsageItem
}
