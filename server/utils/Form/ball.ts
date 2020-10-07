// ball update
export const formUpdate = (data: any, makerId: number) => {
  const { id, userId, name } = data;
  const ball = {
    id,
    name,
    userId,
    makerId: makerId,
  };
  return ball;
};
