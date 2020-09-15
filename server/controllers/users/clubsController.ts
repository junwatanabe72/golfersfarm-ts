import { Request, Response, NextFunction } from "express";
import db, { sequelize } from "../../models";

const clubs = db.Club;
const userClubs = db.UserClubs;
const shafts = db.Shaft;
const makers = db.Maker;
const balls = db.Ball;
const clubTypes = db.ClubType;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const allClubs = await userClubs.findAll({
        where: { userId: req.params.id },
        include: [
          {
            model: clubs,
            required: false,
            include: [
              {
                model: shafts,
                required: false,
              },
              {
                model: clubTypes,
                required: false,
              },
              {
                model: makers,
                required: false,
              },
            ],
          },
        ],
      });
      const targetBall = await balls.findOne({
        where: { userId: req.params.id },
        include: [
          {
            model: makers,
            required: false,
          },
        ],
      });
      res.status(200).json({ data: { allClubs, targetBall } });
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const data = await clubs.add(req.params.id, club, sequelize);
      res.status(201).json(data);
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const updateClub = await clubs.clubUpdate(
        req.params.id,
        req.params.cid,
        club
      );
      if (!updateClub) {
        return res.status(400);
      } else {
        res.status(201).json(updateClub);
      }
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  //今のところ使わない。

  // async delete(id: string) {
  //   const targetWood: any = await woods.findOne({
  //     where: { id: id },
  //   })
  //   await targetWood.destroy();
  //   return { message: "ok" }
  // }
};
