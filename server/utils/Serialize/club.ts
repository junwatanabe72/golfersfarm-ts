// server=>client型に変換

// index
export const serializeIndex = (datas: any[]) => {
  const AllClubs = datas.map((data: any) => {
    const { Club, userId } = data;
    const { Maker, Shaft, ClubType, dataValues } = Club;
    const club = {
      ...dataValues,
      userId,
      maker: Maker.name,
      shaft: Shaft.name,
      type: ClubType.type,
    };
    return club;
  });

  return AllClubs;
};

// replace
export const serializeReplace = (
  data: any,
  type: any,
  maker: any,
  shaft: any
) => {
  const { newClub, newUserClubs } = data;
  const { dataValues } = newClub;

  const club = {
    ...dataValues,
    userId: newUserClubs.userId,
    shaft: shaft,
    maker: maker,
    type: type,
  };
  return club;
};
