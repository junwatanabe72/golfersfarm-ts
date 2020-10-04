// index
export const convertToClientIndex = (data: any[]) => {
  const allResults = data.map((value: any) => {
    const { Result, userId } = value;
    const { id, name, url, year, month, rank } = Result;
    const newData = convertRankData(rank);
    const rankValue = newData ? newData[0] : "";
    const tieValue = newData ? newData[1] : "";
    const result = {
      id,
      name,
      url,
      year,
      month,
      userId,
      rank: rankValue,
      tie: tieValue,
    };
    return result;
  });
  return allResults;
};

// replace
export const convertToServerReplace = (data: any) => {
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
// replace
export const convertToClientReplace = (data: any) => {
  const { newResult, newUserResults } = data;
  const { userId } = newUserResults;
  const { id, name, url, year, month, rank } = newResult;
  const newData = convertRankData(rank);
  const rankValue = newData ? newData[0] : "";
  const tieValue = newData ? newData[1] : "";
  const result = {
    id,
    name,
    userId,
    url,
    year,
    month,
    rank: rankValue,
    tie: tieValue,
  };
  return result;
};

// create

export const convertToClientCreate = async (data: any) => {
  const { newResult, newUserResults } = data;
  const { userId } = newUserResults;
  const { id, name, url } = newResult;

  const result = {
    ...newResult,
    userId,
  };
  return result;
};

export const convertRankData = (rank: string) => {
  // "100T" => ["100","T"]
  // "1" =>["1"]
  // "CUT" =>["CUT"]
  const newData = rank.match(/CUT|\d{1,2}|[^\u$]/g);
  return newData;
};
