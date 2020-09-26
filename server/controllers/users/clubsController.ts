import { Request, Response, NextFunction } from "express";
import db, { sequelize } from "../../models";
import {
  convertArrayClubDataToClient,
  convertClubDataToServer,
  convertClubDataToClient,
  convertCreateClubDataToClient,
} from "../../utils/convert/club";
import passport from "passport";
const Club = db.Club;
const UserClubs = db.UserClubs;
const Shaft = db.Shaft;
const Maker = db.Maker;
const ClubTypes = db.ClubType;

export default {
  async index(req: Request, res: Response) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          const targetClubs = await UserClubs.findAll({
            where: { userId: req.params.id },
            include: [
              {
                model: Club,
                required: false,
                include: [
                  {
                    model: Shaft,
                    required: false,
                  },
                  {
                    model: ClubTypes,
                    required: false,
                  },
                  {
                    model: Maker,
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
          return;
        }
      }
    )(req, res);
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const data = await Club.add(req.params.id, club, sequelize);
      const newClub = await convertCreateClubDataToClient(data.newData);
      res.status(201).json(newClub);
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  async replace(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const updateClubs = await Promise.all(
        club.map(async (value: any) => {
          // clientのclub型をserver型に変換
          const { type, maker, shaft } = value;
          const targetClub = await convertClubDataToServer(value);
          if (!targetClub.id) {
            const { newData } = await Club.add(
              req.params.id,
              targetClub,
              sequelize
            );
            // serverのclub型をclient型に変換
            const club = convertClubDataToClient(newData, type, maker, shaft);
            return club;
          }
          if (!targetClub.name) {
            await Club.clubDelete(req.params.id, targetClub, sequelize);
            return;
          }

          const { newData } = await Club.clubReplace(
            req.params.id,
            targetClub,
            sequelize
          );
          // serverのclub型をclient型に変換
          const club = convertClubDataToClient(newData, type, maker, shaft);
          return club;
        })
      );
      if (!updateClubs) {
        return res.status(400);
      }
      res.status(201).json({ data: { updateClubs } });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    const targetClub = convertClubDataToServer(club);
    try {
      const deleteClub = await Club.clubDelete(
        req.params.id,
        targetClub,
        sequelize
      );
      if (!deleteClub) {
        return res.status(400);
      }
      res.status(201).json({ deleteClub });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
