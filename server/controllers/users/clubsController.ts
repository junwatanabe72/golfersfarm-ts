import { Request, Response, NextFunction } from "express";
import db, { sequelize } from "../../models";
import {
  convertArrayClubDataToClient,
  convertClubDataToServer,
  convertClubDataToClient,
  convertArrayClubDataToServer,
} from "../../utils/convert";
const clubs = db.Club;
const userClubs = db.UserClubs;
const shafts = db.Shaft;
const makers = db.Maker;
const balls = db.Ball;
const clubTypes = db.ClubType;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const targetClubs = await userClubs.findAll({
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
      const allClubs = convertArrayClubDataToClient(targetClubs);
      res.status(200).json({ data: { allClubs } });
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const data = await clubs.add(req.params.id, club, sequelize);
      const newClub = await convertClubDataToClient(data.newData);
      res.status(201).json(newClub);
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  async replace(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const newData = await Promise.all(
        club.map(async (value: any) => {
          // console.log(value);
          const targetClub = await convertClubDataToServer(value);
          if (!targetClub.id) {
            const { newData } = await clubs.add(
              req.params.id,
              targetClub,
              sequelize
            );
            const club = await convertClubDataToClient(newData);
            return club;
          }
          if (!targetClub.name) {
            await clubs.clubDelete(req.params.id, targetClub, sequelize);
            return;
          }

          const { newData } = await clubs.clubReplace(
            req.params.id,
            targetClub,
            sequelize
          );
          const club = await convertClubDataToClient(newData);
          return club;
        })
      );
      if (!newData) {
        return res.status(400);
      } else {
        const returnData = newData.filter((value) => value);
        res.status(201).json({ data: { returnData } });
      }
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    const targetClub = convertClubDataToServer(club);
    try {
      const deleteClub = await clubs.clubDelete(
        req.params.id,
        targetClub,
        sequelize
      );
      if (!deleteClub) {
        return res.status(400);
      } else {
        res.status(201).json({ deleteClub });
      }
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
