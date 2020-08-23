// ↑本番では、使わない！！

export const profileTableItems = {
  bestScore: 'ベストスコア',
  averageDistance: '平均飛距離',
  homeCource: 'ホームコース',
};

export const profileTableSubItems = {
  sex: '性別',
  residence: '現住所',
  birthPlace: '出生地',
  job: '職業',
  school: '出身校',
  hobby: '趣味',
};
export interface profileTableSubItemsType {
  sex: string;
  residence: string;
  birthPlace: string;
  school: string;
  job: string;
  hobby: string;
  [key: string]: string;
}
export interface profileTablemainItemsType {
  bestScore: string;
  averageDistance: string;
  homeCource: string;
  [key: string]: string;
}
export type profileTableItemsType = profileTablemainItemsType | profileTableSubItemsType;

export const resultTableItems = {
  year: '年',
  com: '競技',
  rank: '順位',
};
export interface resultTableItemsType {
  year: string;
  com: string;
  rank: string;
  [key: string]: string;
}

export const gearTableItems = {
  typeId: '種類',
  name: '名前',
  makerId: 'メーカー',
  shaftId: 'シャフト',
  userId: '硬さ',
};

export interface gearTableItemsType {
  typeId: string;
  name: string;
  makerId: string;
  shaftId: string;
  userId: string;
  [key: string]: string;
}

export const profileTableKeys = ['ベストスコア', '平均飛距離', 'ホームコース'];
export const profileTableTargetkey = ['bestScore', 'averageDistance', 'homeCource'];
export const profileSubTableKeys = ['性別', '現住所', '出生地', '出身校', '職業', '趣味'];
export const profileSubTableTargetkey = [
  'sex',
  'residence',
  'birthPlace',
  'school',
  'job',
  'hobby',
];
export const gearTableKeys = ['種類', '名前', 'メーカー', 'シャフト', '硬さ'];
export const targetkey = ['name', 'shaftId', 'makerId', 'typeId'];
export const resultTableKeys = ['年', '競技', '順位'];
