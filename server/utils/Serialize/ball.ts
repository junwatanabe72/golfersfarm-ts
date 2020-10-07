export const serializeUpdate = (data: any, makerName: string) => {
  const { id, userId, name } = data;
  const ball = {
    id,
    name,
    userId,
    maker: makerName,
  };
  return ball;
};

//ball index
export const serializeIndex = (data: any) => {
  const { id, userId, name, Maker } = data;
  const ball = {
    id,
    name,
    userId,
    maker: Maker.name,
  };
  return ball;
};
