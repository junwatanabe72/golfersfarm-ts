import { Request, Response } from "express";
import {sequelize} from "../models"
import usersController from "./usersController";
import woodsController from "./woodsController";
import ballsController from "./ballsController";
import videosController from "./videosController";

const resData = (arg:{})=>{return {"data": arg}}

export default {

  async userShow(req: Request, res: Response) {
    try {
      await sequelize.transaction(async (t) => {
        const targetUser = await usersController.show(req.params.id, { transaction: t });
        const targetWood = await woodsController.show(targetUser.id, { transaction: t })
        const targetBall = await ballsController.show(targetUser.id, { transaction: t })
        const targetVideo = await videosController.index(targetUser.id, { transaction: t })
        res.json({ "data": { targetUser, targetWood, targetBall, targetVideo}});
        })
    } catch (error) {
      res.status(400)
    }
  },
  async userIndex(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUser = await usersController.index();
      if (!allUser) {
        return res.status(404).json({ message: 'not exist' });
      }
    res.json(resData({allUser}));
  },
  async userCreate(req: any, res: Response) {
    const {user} = req.body; 
      try {
        await sequelize.transaction(async (t) => {
            const newUser = await usersController.create(user,{ transaction: t });
            const newBall = await ballsController.create(newUser.id, { transaction: t });
            const newWood = await woodsController.create(newUser.id, { transaction: t });
          
          res.json([{ newUser }, { newBall }, { newWood}]);
            })
      } catch (error) {
          res.status(400)
      }
  },
  async userUpdate(req: any, res: Response) {
    const { user } = req.body;
    const updateUser = await usersController.update(req.params.id,user)
      if (!updateUser) {
        return res.status(404).json({ message: 'not exist' });
      }
    res.json({ updateUser });
  },
  async userDelete(req: any, res: Response) {
    usersController.delete(req.params.id);
    res.json({});
  },

  async videoCreate(req: any, res: Response) {
    const { video } = req.body;
    const newVideo = await videosController.create(req.params.id, video,null);
    if (!newVideo) {
      return res.status(404).json({ message: 'not exist' });
    }
    res.json({ newVideo });
  },
  async videoUpdate(req: any, res: Response) {
    const { video } = req.body;
    const updateVideo = await videosController.update(req.params.id,req.params.videoid,video)
    if (!updateVideo) {
      return res.status(404).json({ message: 'not exist' });
    }
    res.json({ updateVideo });
  },
  async videoDelete(req: any, res: Response) {
    videosController.delete(req.params.id,req.params.videoid);
    res.json({});
  },



  async userShowtest(req: Request, res: Response) {
        const targetUser = await usersController.show(req.params.id,null);
        res.json({ "data": { targetUser } });
  },
};
