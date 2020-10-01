export const FORMTYPES = {
  SIGNLOGIN: 'SIGNLOGIN',
  USERPROFILE: 'USERPROFILE',
} as const;

export const checkObject = (obj: { [key: string]: string | number }) => {
  // まずキーのみをソートする
  const keys = Object.keys(obj).sort();
  // 返却する空のオブジェクトを作る
  let map: { [key: string]: string | number } = {};
  // ソート済みのキー順に返却用のオブジェクトに値を格納する
  keys.forEach((key) => {
    map[key] = obj[key];
  });
  return map;
};
