// index
export const convertToClientIndex = (data: any[]) => {
  const allResults = data.map((value: any) => {
    const { Result, userId } = value;
    const { id, name, url, date, rank } = Result;
    const result = {
      id,
      name,
      url,
      rank,
      date,
      userId,
    };
    return result;
  });
  return allResults;
};

// replace
export const convertToServerReplace = (data: any) => {
  const { id, name, date, rank, url } = data;

  const result = {
    id: id || undefined,
    name: name || undefined,
    url,
    date,
    rank,
  };
  return result;
};
// replace
export const convertToClientReplace = (data: any) => {
  const { newResult, newUserResults } = data;
  const { userId } = newUserResults;
  const { id, name, url, date, rank } = newResult;
  const result = {
    id,
    name,
    userId,
    url,
    date,
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
