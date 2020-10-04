export const FORMTYPES = {
  SIGNLOGIN: 'SIGNLOGIN',
  USERPROFILE: 'USERPROFILE',
} as const;

export function checkObject(obj: { [key: string]: string | number }) {
  // まずキーのみをソートする
  const keys = Object.keys(obj).sort();
  // 返却する空のオブジェクトを作る
  let map: { [key: string]: string | number } = {};
  // ソート済みのキー順に返却用のオブジェクトに値を格納する
  keys.forEach((key) => {
    map[key] = obj[key];
  });
  return map;
}

export function unchangedValues(
  current: { [key: string]: string | number }[],
  submit: { [key: string]: string | number }[]
): boolean {
  const storeClubsJsonData = Object.values(current).map((value) => {
    return JSON.stringify(checkObject(value));
  });
  const unchanged = Object.values(submit)
    .map((value, num: number) => {
      const data = JSON.stringify(checkObject(value));
      return storeClubsJsonData[num] === data;
    })
    .every((value) => value);
  if (unchanged && submit.length === current.length) {
    return true;
  }
  return false;
}

export function deleteValues(
  current: { [key: string]: string | number }[],
  submit: { [key: string]: string | number }[]
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

export function arrayToString(result: any) {
  const returnValues = result.map((value: any) => {
    if (Array.isArray(value['tie'])) {
      value['tie'] = value['tie'].join();
      return value;
    }
    return value;
  });

  return returnValues;
}
