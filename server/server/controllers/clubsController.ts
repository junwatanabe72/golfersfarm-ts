import { Request, Response, NextFunction } from "express";
import db from "../models"

const clubs = db.Club;
const shafts = db.Shaft;
const makers = db.Maker;
const balls = db.Ball;
const clubTypes = db.ClubType;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    try {
      const allClubs = await clubs.findAll({
        where: { userId: req.params.id },raw: false,
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
      });
      const targetBall = await balls.findOne({
        where: { userId: req.params.id }, raw: false,
        include: [
          {
            model: makers,
            required: false,
          },
        ],
      })
      res.status(201).json([{ allClubs },{ targetBall}]);
    } catch (error) {
        res.status(404)
        return next(error)
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      //woodを更新する。
      const updateClub = await clubs.clubUpdate(req.params.id, club)
      if (!updateClub) {
        return res.status(404)
      } else {
        res.status(201).json({ updateClub });
      }
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
  // async create(id: number,transaction: any | null) {
  //   const newWood = await clubs.create({
  //         userId: id
  //       },transaction
  //     );
  //   return newWood;
  // },
  //今のところ使わない。
  
  // async delete(id: string) {
  //   const targetWood: any = await woods.findOne({
  //     where: { id: id },
  //   })
  //   await targetWood.destroy();
  //   return { message: "ok" }
  // }
};
