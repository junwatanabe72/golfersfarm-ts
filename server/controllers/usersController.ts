import { Request, Response, NextFunction } from "express";
import db,{sequelize} from "../models"
const users = db.User;
const clubs = db.Club;
const balls = db.Ball;
const videos = db.Video;
const makers = db.Maker;
const shafts = db.Shaft;
const clubTypes = db.ClubType;

export default {

  async show(req: Request, res: Response, next: NextFunction) {
    try {
        const targetUser = await users.findOne({
            where: { id: req.params.id }, raw: false
          })
        const targetClubs = await clubs.findAll({
          where: { userId: targetUser.id }, raw: false,
          include: [
            {
              model: makers,
              required: false,
            },
            {
              model: shafts,
              required: false,
            },
            {
              model: clubTypes,
              required: false,
            },
          ],
        })
        const targetBall = await balls.findOne({
            where: { userId: targetUser.id },raw: false,
            include: [
              {
                model: makers,
                required: false,
              },
            ],
          })
        const allVideos = await videos.findAll({
            where: { userId: targetUser.id },
            raw: false,
          })
      res.json({ targetUser, targetClubs ,targetBall, allVideos});
    } catch (error) {
      res.status(400)
      return next(error)
    }
  },
  async index(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUsers = await users.findAll({
      // where: { status: queryStatus },
    });
      if (!allUsers) {
        res.status(204).json({ message: 'not exist' });
      }else{
        res.json({allUsers});
      }
  },
  async create(req: any, res: Response, next: NextFunction) {
    const {user} = req.body; 
      try {
        const newData = await users.add(user,sequelize) 
        res.status(201).json({newData});
      } catch (error) {
          res.status(400)
        return next(error)
      }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { user } = req.body;
      try{
        const updateUser = users.updateProfile(user)
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
  async delete(req: Request, res: Response, next: NextFunction) {
      try {
        users.delete(req.params.id);
        res.status(204).json({});
      } catch (error) {
          res.status(404)
        return next(error)
      }
  },
}
