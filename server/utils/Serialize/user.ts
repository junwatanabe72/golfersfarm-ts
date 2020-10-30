// server=>client型に変換

export const serializeUpdate = (data: any, typeType?: string) => {
  const { dataValues } = data.updateUser;
  const user = {
    ...dataValues,
    typeId: typeType,
  };
  return user;
};

//user index
export const serializeIndex = (datas: any[]) => {
  const users = datas.map((data) => {
    const { ClubType, dataValues } = data;
    const { password, email, ...params } = dataValues;
    delete params.ClubType;
    const user = {
      ...params,
      typeId: ClubType.type,
    };
    return user;
  });
  return users;
};

export const serializeLogin = (data: any) => {
  const { ClubType, dataValues } = data;
  delete dataValues.ClubType;
  const user = {
    ...dataValues,
    typeId: ClubType.type,
  };
  return user;
};
