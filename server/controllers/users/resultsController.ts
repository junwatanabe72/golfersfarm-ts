import { Request, Response, NextFunction } from "express";
import passport from "passport";
import db, { sequelize } from "../../models";
import {
  convertToClientIndex,
  convertToServerReplace,
  convertToClientReplace,
  convertToClientCreate,
} from "../../utils/convert/result";
const Result = db.Result;
const UserResults = db.UserResults;

export default {
  async index(req: Request, res: Response) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          const targetResults = await UserResults.findAll({
            where: { userId: req.params.id },
            include: [
              {
                model: Result,
                required: false,
              },
            ],
          });

          if (!targetResults) {
            res.status(400);
            return;
          }
          // serverのResult型をclient型に変換
          const allResults = convertToClientIndex(targetResults);
          res.status(200).json({ data: { allResults } });
        } catch (error) {
          res.status(404);
          return;
        }
      }
    )(req, res);
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { result } = req.body;
    try {
      const data = await result.add(req.params.id, result, sequelize);
      // serverのResult型をclient型に変換
      const newResult = convertToClientCreate(data);
      res.status(201).json({ newResult });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  async replace(req: Request, res: Response, next: NextFunction) {
    const { result } = req.body;

    try {
      const targetResults = await Promise.all(
        result.map(async (value: any) => {
          // clientのResult型をserver型に変換
          const targetResult = convertToServerReplace(value);

          if (!targetResult.id) {
            const { newData } = await Result.add(
              req.params.id,
              targetResult,
              sequelize
            );
            // serverのResult型をclient型に変換
            const result = convertToClientReplace(newData);
            return result;
          }
          if (!targetResult.name) {
            await Result.resultDelete(req.params.id, targetResult, sequelize);
            return;
          }

          const { newData } = await Result.resultReplace(
            req.params.id,
            targetResult,
            sequelize
          );
          // serverのResult型をclient型に変換
          const result = convertToClientReplace(newData);
          return result;
        })
      );
      const updateResults = targetResults.filter((value) => value);

      res.status(201).json({ data: { updateResults } });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
