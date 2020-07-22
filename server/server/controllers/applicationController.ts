import { Request, Response, NextFunction } from "express";
import {sequelize} from "../models"
import usersController from "./usersController";
import woodsController from "./woodsController";
import ballsController from "./ballsController";
import videosController from "./videosController";

const resData = (arg:{})=>{return {"data": arg}}

export default {

  async userShow(req: Request, res: Response, next: NextFunction) {
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
      return next(error)
    }
  },
  async userIndex(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUsers = await usersController.index();
      if (!allUsers) {
        res.status(204).json({ message: 'not exist' });
      }else{
        res.json(resData({allUsers}));
      }
  },
  async userCreate(req: any, res: Response, next: NextFunction) {
    const {user} = req.body; 
      try {
        await sequelize.transaction(async (t) => {
            const newUser = await usersController.create(user,{ transaction: t });
            const newBall = await ballsController.create(newUser.id, { transaction: t });
            const newWood = await woodsController.create(newUser.id, { transaction: t });
          res.status(201).json([{ newUser }, { newBall }, { newWood}]);
            })
      } catch (error) {
          res.status(400)
        return next(error)
      }
  },
  async userUpdate(req: any, res: Response, next: NextFunction) {
    const { user } = req.body;
      try{
        const updateUser = await usersController.update(req.params.id,user)
          if (!updateUser) { 
            return res.status(404) 
          }else{
            res.status(201).json({ updateUser });
          }
      } catch (error){
          res.status(404)
        return next(error)
      }
  },
  async userDelete(req: any, res: Response, next: NextFunction) {
      try {
        usersController.delete(req.params.id);
        res.status(204).json({});
      } catch (error) {
          res.status(404)
        return next(error)
      }
  },

  async videoIndex(req: any, res: Response, next: NextFunction) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    try {
      const allVideos = await videosController.index(req.params.id,null);
        if (!allVideos) {
            res.status(204).json({ message: 'not exist' });
        }else{
          res.json(resData({ allVideos }));
        }
    } catch (error) {
        res.status(404)
      return next(error)
    }
  },
  async videoCreate(req: any, res: Response, next: NextFunction) {
    const { video } = req.body;
      try {
        const newVideo = await videosController.create(req.params.id, video,null);
          res.status(201).json({ newVideo });
      } catch (error) {
          res.status(404)
        return next(error)
      }
  },
  async videoUpdate(req: any, res: Response, next: NextFunction) {
    const { video } = req.body;
      try{
        const updateVideo = await videosController.update(req.params.id,req.params.videoid,video)
        if (!updateVideo) {
          return res.status(404)
        } else {
          res.status(201).json({ updateVideo });
        }
      } catch (error) {
          res.status(404)
        return next(error)
      }
  },
  async videoDelete(req: any, res: Response, next: NextFunction) {
    try{
      videosController.delete(req.params.id,req.params.videoid);
      res.status(204).json({});
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
  async userShowtest(req: Request, res: Response, next: NextFunction) {
    try{
      const targetUser = await usersController.show(req.params.id,null);
      res.json({ "data": { targetUser } });
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
}
