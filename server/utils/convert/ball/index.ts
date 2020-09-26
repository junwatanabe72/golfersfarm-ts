import db from "../../../models";
const makers = db.Maker;

// ball update
export const convertBallDataToServer = async (data: any) => {
  const { id, userId, name, maker } = data;

  const targetMaker = await makers.findOne({
    where: {
      name: maker,
    },
  });
  const ball = {
    id,
    name,
    userId,
    makerId: targetMaker.id,
  };
  return ball;
};

export const convertBallDataToClient = (data: any, makerName: string) => {
  const { id, userId, name } = data;
  const ball = {
    id,
    name,
    userId,
    maker: makerName,
  };
  console.log(ball);
  return ball;
};

//ball index
export const convertBallDataToClientIndex = (data: any) => {
  const { id, userId, name, Maker } = data;
  const ball = {
    id,
    name,
    userId,
    maker: Maker.name,
  };
  return ball;
};
