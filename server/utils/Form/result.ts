// client=>serverに変換

// replace
export const formReplace = (data: any) => {
  const { id, name, year, month, rank, tie, url } = data;
  const value = rank + tie;
  const result = {
    id: id || undefined,
    name: name || undefined,
    url,
    year,
    month,
    rank: value,
  };
  return result;
};
