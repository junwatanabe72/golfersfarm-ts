// server=>client型に変換

// index
export const serializeIndex = (datas: any[]) => {
  const allResults = datas.map((data: any) => {
    const { Result, userId } = data;
    const { dataValues, rank } = Result;
    const { rankValue, tieValue } = convertRank(rank);
    const result = {
      ...dataValues,
      userId,
      rank: rankValue,
      tie: tieValue,
    };
    return result;
  });
  return allResults;
};

// replace
export const serializeReplace = (data: any) => {
  const { newResult, newUserResults } = data;
  const { userId } = newUserResults;
  const { dataValues, rank } = newResult;
  const { rankValue, tieValue } = convertRank(rank);
  const result = {
    ...dataValues,
    userId,
    rank: rankValue,
    tie: tieValue,
  };
  return result;
};

const convertRank = (rank: string) => {
  const newData = rank.match(/CUT|\d{1,2}|[^\u$]/g);
  const rankValue = newData ? newData[0] : "";
  const tieValue = newData ? newData[1] : "";
  return { rankValue, tieValue };
};
