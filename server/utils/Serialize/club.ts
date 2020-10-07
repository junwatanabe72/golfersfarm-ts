// index
export const serializeIndex = (data: any[]) => {
  const AllClubs = data.map((value: any) => {
    const { Club, userId } = value;
    const { Maker, Shaft, ClubType, id, name, flex } = Club;
    const club = {
      id,
      name,
      userId: userId,
      maker: Maker.name,
      shaft: Shaft.name,
      flex: flex,
      type: ClubType.type,
    };
    return club;
  });

  return AllClubs;
};

// replace
export const serializeReplace = (
  data: any,
  typeObj: any,
  makerObj: any,
  shaftObj: any
) => {
  const { newClub, newUserClubs } = data;
  const { id, name, flex } = newClub;

  const club = {
    id,
    name,
    userId: newUserClubs.userId,
    shaft: shaftObj,
    flex: flex,
    maker: makerObj,
    type: typeObj,
  };
  return club;
};
