export const TopTitleText: string[] = [
  "あなたのゴルフライフを公開しよう！",
  "Golfersfarmはゴルファーのためのプロフィール公開ツールです。",
  "「無料」で使えて、操作も簡単です。",
  "さあ、今すぐ登録をしよう！Enjoy your Golf life!!",
  "今すぐ無料登録する",
]

const ConceptText: string[] = [
  "Golfersfarmはこれまでになかったゴルファーのためのアプリケーションです。",
  "ゴルフの醍醐味は、スコアだけではありません。",
  "Golfersfarmでは、ツアープロのようにあなたのクラブセッティングやスウィング動画などを登録できます。",
  "あなたのこだわりや努力を全世界に向けて、公開しましょう！",
  "Golfersfarmを始める",
];

const ConceptTitle= "ゴルフを、もっと楽しく";

export const TopConceptText={
  ConceptText,
  ConceptTitle
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

export interface TOPTITLETYPE {
  TopTitleText: typeof TopTitleText
}

export interface TOPCONCEPTTYPE {
  ConceptText: typeof TopConceptText.ConceptText,
  ConceptTitle: typeof TopConceptText.ConceptTitle
}
export interface TOPUSAGETYPE {
  UsageTitle: typeof TopUsageText.UsageTitle
  UsageItem: typeof TopUsageText.UsageItem
}
