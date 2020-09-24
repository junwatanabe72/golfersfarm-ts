import db from "../models";
const shafts = db.Shaft;
const makers = db.Maker;
const clubTypes = db.ClubType;
// index
export const convertArrayClubDataToClient = (data: any[]) => {
  let AllClubs: any = {};
  data.map((value: any) => {
    const { Club, userId } = value;
    const { Maker, Shaft, ClubType, id, name } = Club;
    const club = {
      id,
      name,
      userId: userId,
      maker: Maker.name,
      shaft: Shaft.name,
      flex: Shaft.flex,
      type: ClubType.type,
    };
    AllClubs[id] = club;
  });

  return AllClubs;
};
//index
export const convertArrayClubDataToServer = async (data: any) => {
  const AllClubs = data.map(async (value: any) => {
    const { type, name, maker, shaft } = value;
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
        name: type,
      },
    });

    const club = {
      name,
      shaftId: targetShaft.id,
      makerId: targetMaker.id,
      typeId: targetClubType.id,
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
  };

  return club;
};
// replace
export const convertClubDataToClient = async (data: any) => {
  const { newClub, newUserClubs } = data;
  const { id, name, shaftId, makerId, typeId } = newClub;
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
    flex: targetShaft.flex,
    maker: targetMaker.name,
    type: targetClubType.type,
  };
  return club;
};

export const convertArrayClubDataToClientForUpdate = (data: any[]) => {
  let updateClubs: any = {};
  data.map((value: any) => {
    if (!value) {
      return;
    }
    const { id } = value;
    updateClubs[id] = value;
  });

  return updateClubs;
};
