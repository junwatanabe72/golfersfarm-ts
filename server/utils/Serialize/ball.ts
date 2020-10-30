// server=>client型に変換

export const serializeUpdate = (data: any, makerName: string) => {
  const { dataValues } = data;
  delete dataValues.makerId;
  const ball = {
    ...dataValues,
    maker: makerName,
  };
  return ball;
};

//ball index
export const serializeIndex = (data: any) => {
  const { dataValues, userId, Maker } = data;
  delete dataValues.Maker;
  delete dataValues.makerId;
  const ball = {
    ...dataValues,
    userId,
    maker: Maker.name,
  };
  return ball;
};
