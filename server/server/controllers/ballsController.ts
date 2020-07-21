import db from "../models"
import { ballType } from "../models/balls";

const balls = db.Ball;
const makers = db.Maker;

export default {
  async show(id: number, transaction: any | null) {
    const targetBall = await balls.findOne({
      where: { userId: id },
      raw: false,
      include: [
            {
              model: makers,
              required: false,
            },
          ],
    },transaction)
    return targetBall;
  },
  async create(id: number,transaction: any | null) {
    const newBall = await balls.create({
          userId: id
        },transaction
      );
    return newBall;
  },
  async update(id: string, ball: ballType) {
    const targetBall: any = await balls.findOne({
      where: { id: id }
    });
    if (!targetBall) { return { message: "check this userId" } }
    //woodを更新する。
    const updateBall = await targetBall.update({
      name: ball.name,
      makerId: ball.makerId,
    });
    return  updateBall;
  },

  //今のところ使わない。
  // async index() {
  //   // const queryStatus: any = req.query.status ? req.query.status : statusValues;
  //   const allBall = await balls.findAll({
  //     // where: { status: queryStatus },
  //   });
  //   return allBall;
  // },
  // async delete(id: string) {
  //   const targetBall: any = await balls.findOne({
  //     where: { id: id },
  //   })
  //   await targetBall.destroy();
  //   return { message: "ok" }
  // }
};
