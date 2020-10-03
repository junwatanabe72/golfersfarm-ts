// index
export const convertToClientIndex = (data: any[]) => {
  const allResults = data.map((value: any) => {
    const { Result, userId } = value;
    const { id, name, url, year, month, rank } = Result;
    const result = {
      id,
      name,
      url,
      rank,
      year,
      month,
      userId,
    };
    return result;
  });
  return allResults;
};

// replace
export const convertToServerReplace = (data: any) => {
  const { id, name, year, month, rank, url } = data;

  const result = {
    id: id || undefined,
    name: name || undefined,
    url,
    year,
    month,
    rank,
  };
  return result;
};
// replace
export const convertToClientReplace = (data: any) => {
  const { newResult, newUserResults } = data;
  const { userId } = newUserResults;
  const { id, name, url, year, month, rank } = newResult;
  const result = {
    id,
    name,
    userId,
    url,
    year,
    month,
    rank,
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
