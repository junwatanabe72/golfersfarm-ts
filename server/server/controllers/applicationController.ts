import { Request, Response } from "express";
import db,{sequelize} from "../models"
import woodsController from "./woodsController";
import usersController from "./usersController";

const balls = db.Ball;

const resData = (arg:{})=>{return {"data": arg}}

export default {

  async show(req: Request, res: Response) {
    const targetUser = await usersController.show(req.params.id);
      
      if (!targetUser) {
        return res.status(404).json({ message: 'not exist' });
      }
    const targetWood = await woodsController.show(targetUser.id)
      
      if (!targetWood) {
        return res.status(404).json({ message: 'not exist' });
      }
    res.json({ "data": { targetUser, targetWood}});
  },

  async index(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUser = await usersController.index();
      if (!allUser) {
        return res.status(404).json({ message: 'not exist' });
      }
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
        const newWood = await woodsController.create(newuser.id, { transaction: t });

        res.json([{ newuser }, { newBall }, { newWood}]);
          })
    } catch (error) {
      res.status(400)
    }
  },

  async update(req: any, res: Response) {
    const updateUser = await usersController.update(req.params.id, req.body.user)
      if (!updateUser) {
        return res.status(404).json({ message: 'not exist' });
      }
    res.json({ updateUser });
  },

  async delete(req: any, res: Response) {
    usersController.delete(req.params.id);
    res.json({});
  }
};
