export const FORMTYPES = {
  SIGNLOGIN: 'SIGNLOGIN',
  USERPROFILE: 'USERPROFILE',
} as const;

export function checkObject<T>(obj: T) {
  // まずキーのみをソートする
  const keys = Object.keys(obj).sort();
  // 返却する空のオブジェクトを作る
  let map: Partial<T> = {};
  // ソート済みのキー順に返却用のオブジェクトに値を格納する
  keys.forEach((key) => {
    map[key as keyof T] = obj[key as keyof T];
  });
  return map;
}

export function unchangedValues<T, K>(current: T[], submit: K[]): boolean {
  const storeClubsJsonData = Object.values(current).map((value) => {
    return JSON.stringify(checkObject(value));
  });
  const unchanged = Object.values(submit).map((value, num: number) => {
    const data = JSON.stringify(checkObject(value));
    return storeClubsJsonData[num] === data;
  });
  if (unchanged && submit.length === current.length) {
    return true;
  }
  return false;
}

export function deleteValues<T extends { id: number }, K extends { id: number }>(
  current: T[],
  submit: K[]
) {
  const submitValuesIds = Object.values(submit).map((value) => {
    return value.id;
  });
  const values = Object.values(current)
    .filter((value) => {
      const data = submitValuesIds.includes(value.id);
      return !data;
    })
    .map((value) => {
      return { ...value, name: undefined };
    });
  return values;
}
