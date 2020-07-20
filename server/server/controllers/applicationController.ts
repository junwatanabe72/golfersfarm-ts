import { Request, Response } from "express";
import db,{sequelize} from "../models"
import woodsController from "./woodsController";
import usersController from "./usersController";

const balls = db.Ball;
const woods = db.Wood;
const shafts = db.Shaft;
const makers = db.Maker;
const num = 1;
const resData = (arg:{})=>{return {"data": arg}}

export default {

  async show(req: Request, res: Response) {
    const targetUser = await usersController.show(req.params.id);
    const targetWood = await woodsController.show(targetUser.id)
    
    if (!targetWood) {
      return res.status(404).json({ message: 'not exist' });
    }
    res.json({ "data": { targetUser, targetWood}});
  },

  async index(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUser = await usersController.index();
    
    res.json(resData({allUser}));
  },
  
  async create(req: any, res: Response) {
    const {user} = req.body;
    
    try {
      await sequelize.transaction(async (t) => {
        const newuser = await usersController.create(user,{ transaction: t });
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
    const updateUser = await usersController.update(req.params.id, req.body.user)
    res.json({ updateUser });
  },

  async delete(req: any, res: Response) {
    usersController.delete(req.params.id);
    res.json({});
  }
};
