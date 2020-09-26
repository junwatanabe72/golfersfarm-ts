import db from "../../../models";
const shafts = db.Shaft;
const makers = db.Maker;
const clubTypes = db.ClubType;
// index
export const convertArrayClubDataToClient = (data: any[]) => {
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
export const convertClubDataToServer = async (data: any) => {
  const { type, maker, shaft } = data;
  const targetShaft = await shafts.findOne({
    where: {
      name: shaft,
    },
  });
  const targetMaker = await makers.findOne({
    where: {
      name: maker,
    },
  });
  const targetClubType = await clubTypes.findOne({
    where: {
      type: type,
    },
  });
  const club = {
    id: data.id || undefined,
    name: data.name || undefined,
    shaftId: targetShaft.id,
    makerId: targetMaker.id,
    typeId: targetClubType.id,
    flex: data.flex,
  };

  return club;
};
// replace
export const convertClubDataToClient = (
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
    shaft: shaftObj.name,
    flex: flex,
    maker: makerObj.name,
    type: typeObj.type,
  };
  return club;
};

// create

export const convertCreateClubDataToClient = async (data: any) => {
  const { newClub, newUserClubs } = data;
  const { id, name, shaftId, makerId, typeId, flex } = newClub;
  const targetShaft = await shafts.findOne({
    where: {
      id: shaftId,
    },
  });
  const targetMaker = await makers.findOne({
    where: {
      id: makerId,
    },
  });
  const targetClubType = await clubTypes.findOne({
    where: {
      id: typeId,
    },
  });

  const club = {
    id,
    name,
    userId: newUserClubs.userId,
    shaft: targetShaft.name,
    flex: flex,
    maker: targetMaker.name,
    type: targetClubType.type,
  };
  return club;
};
