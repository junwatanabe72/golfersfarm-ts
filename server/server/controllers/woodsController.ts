import db from "../models"
import { woodType } from "../models/woods";

const woods = db.Wood;
const shafts = db.Shaft;
const makers = db.Maker;

export default {
  async show(id: number, transaction: any | null) {
    const targetWood = await woods.findOne({
      where: { userId: id },
      raw: false,
      include: [
            {
              model: shafts,
              required: false,
            },
            {
              model: makers,
              required: false,
            },
          ],
    },transaction)
    return targetWood;
  },
  async create(id: number,transaction: any | null) {
    const newWood = await woods.create({
          userId: id
        },transaction
      );
    return newWood;
  },
  async update(id: string, wood: woodType) {
    const targetWood: any = await woods.findOne({
      where: { id: id }
    });
    
    //woodを更新する。
    const updateWood = await targetWood.update({
      name: wood.name,
      shaftId: wood.shaftId,
      makerId: wood.makerId,
      count: wood.count,
    });
    return  updateWood;
  },

  //今のところ使わない。
  // async index() {
  //   // const queryStatus: any = req.query.status ? req.query.status : statusValues;
  //   const allWood = await woods.findAll({
  //     // where: { status: queryStatus },
  //   });
  //   return allWood;
  // },
  // async delete(id: string) {
  //   const targetWood: any = await woods.findOne({
  //     where: { id: id },
  //   })
  //   await targetWood.destroy();
  //   return { message: "ok" }
  // }
};
