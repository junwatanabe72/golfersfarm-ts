import { Request, Response, NextFunction } from "express";
import { Model, DataTypes, Sequelize } from "sequelize";
import db, { sequelize } from "../models";

const clubs = db.Club;
const UserClubs = db.userClubs;
const shafts = db.Shaft;
const makers = db.Maker;
const balls = db.Ball;
const clubTypes = db.ClubType;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    const clubIds: any = req.query.cids ? req.query.cids : "";
    try {
      const allClubs = await clubs.findAll({
        where: { id: clubIds },
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
    const data = await clubs.add(req.params.id, club, sequelize);
    res.status(201).json(data);
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
