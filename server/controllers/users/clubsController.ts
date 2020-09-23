import { Request, Response, NextFunction } from "express";
import db, { sequelize } from "../../models";
import {
  convertArrayClubDataToClient,
  convertClubDataToServer,
  convertClubDataToClient,
  convertArrayClubDataToClientForUpdate,
} from "../../utils/convert";
const Club = db.Club;
const UserClubs = db.UserClubs;
const Shaft = db.Shaft;
const Maker = db.Maker;
const ClubTypes = db.ClubType;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
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
      return next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;
    try {
      const data = await Club.add(req.params.id, club, sequelize);
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
          // clientのclub型をserver型に変換
          const targetClub = await convertClubDataToServer(value);
          if (!targetClub.id) {
            const { newData } = await Club.add(
              req.params.id,
              targetClub,
              sequelize
            );
            // serverのclub型をclient型に変換
            const club = await convertClubDataToClient(newData);
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
          const club = await convertClubDataToClient(newData);
          return club;
        })
      );
      if (!newData) {
        return res.status(400);
      } else {
        // client型のclubデータ配列をclientに返すため、object型に変換 {id:{id: id,name: name,...}}
        const updateClubs = convertArrayClubDataToClientForUpdate(newData);
        res.status(201).json({ data: { updateClubs } });
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
      const deleteClub = await Club.clubDelete(
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
