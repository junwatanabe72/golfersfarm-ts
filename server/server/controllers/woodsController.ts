import { Request, Response } from "express";
import db,{sequelize} from "../models"

const users = db.User;
const balls = db.Ball;
const woods = db.Wood;
const shafts = db.Shaft;
const makers = db.Maker;
const num = 1;
const resData = (arg:{})=>{return {"data": arg}}

export default {

  async show(id: number) {
    const targetWood = await woods.findAll({
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
    })
    if (!targetWood) {
      return { message: 'not exist' };
    }
    return targetWood;
  },

  async index(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUser = await users.findAll({
      // where: { status: queryStatus },
    });
    if (!allUser) {
      return res.status(404).json({ message: "not exist" });
    }
    res.json(resData({allUser}));
  },
  async create(req: any, res: Response) {
    const {
      user: { password,name,email },
    } = req.body;
    // const params = { ...rest, userId: req.user.id };
    try {
      await sequelize.transaction(async (t) => {
        const newuser = await users.create(
          {
            password: password,
            name: name,
            email: email,
          },
          { transaction: t }
        );
          const newBall = await balls.create(
            {
              userId: newuser.id,
            },
            { transaction: t }
          );

        const newShaft = await shafts.findOne({
          where: { id: num }});
        const newMaker = await makers.findOne({
          where: { id: num }
        })
          const newWoods = await woods.create(
            {
              shaftId: newShaft.id,
              makerId: newMaker.id,
              count: "3 5",
              userId: newuser.id,
            },
            { transaction: t }
          );
        res.json([{ newuser }, { newBall }, { newWoods}]);
          })
    } catch (error) {
      res.status(400)
    }
  },

  async update(req: any, res: Response) {
    const targetuser: any = await users.findOne({
      where: { id: req.params.id }
    });
    const params = req.body.user;
    
    if (!targetuser) { res.json({ message: "check this userId" }); }

    //userを更新する。
    const updateUser = await targetuser.update({
      sex: params.sex,
      residence: params.residence,
      averageDistance: params.averageDistance,
      bestScore: params.bestScore,
      email: params.email,
      job: params.job,
      profileImage: params.profileImage,
      clubImage: params.clubImage,
    });
    res.json({ updateUser });
  },
  async delete(req: any, res: Response) {
    const targetuser: any = await users.findOne({
      where: { id: req.params.id },
    })
    if (!targetuser) { 
      res.json({ message: "check this userId" });
    }
    await targetuser.destroy();
    res.json({});
  }
};
