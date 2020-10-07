import { Request, Response, NextFunction } from "express";
import db, { sequelize } from "../../models";
import { formReplace } from "../../utils/Form/club";
import passport from "passport";
import { serializeIndex, serializeReplace } from "../../utils/Serialize/club";
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
          const allClubs = serializeIndex(targetClubs);
          res.status(200).json({ data: { allClubs } });
        } catch (error) {
          res.status(404);
          return;
        }
      }
    )(req, res);
  },

  async replace(req: Request, res: Response, next: NextFunction) {
    const { club } = req.body;

    try {
      const targetClubs = await Promise.all(
        club.map(async (value: any) => {
          const { type, maker, shaft } = value;
          const targetShaft = await Shaft.findOne({
            where: {
              name: shaft,
            },
          });
          const targetMaker = await Maker.findOne({
            where: {
              name: maker,
            },
          });
          const targetClubTypes = await ClubTypes.findOne({
            where: {
              type: type,
            },
          });
          // client=>serverに変換
          const targetClub = await formReplace(
            value,
            targetShaft.id,
            targetMaker.id,
            targetClubTypes.id
          );

          if (!targetClub.id) {
            const { newData } = await Club.add(
              req.params.id,
              targetClub,
              sequelize
            );
            // server=>client型に変換
            const club = serializeReplace(newData, type, maker, shaft);
            return club;
          }
          if (!targetClub.name) {
            await Club.delete(req.params.id, targetClub, sequelize);
            return;
          }

          const { newData } = await Club.replace(
            req.params.id,
            targetClub,
            sequelize
          );
          // server=>client型に変換
          const club = serializeReplace(newData, type, maker, shaft);
          return club;
        })
      );
      const updateClubs = targetClubs.filter((value) => value);

      res.status(201).json({ data: { updateClubs } });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
