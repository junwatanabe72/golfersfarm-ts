import { Request, Response, NextFunction } from "express";
import db from "../../models";
import {
  convertBallDataToClient,
  convertBallDataToServer,
  convertBallDataToClientIndex,
} from "../../utils/convert/ball";
import passport from "passport";

const Ball = db.Ball;
const Maker = db.Maker;

export default {
  async show(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          const ball = await Ball.findOne({
            where: { userId: req.params.id },
            include: [
              {
                model: Maker,
                required: false,
              },
            ],
          });
          const targetBall = convertBallDataToClientIndex(ball);
          res.json({ data: { targetBall } });
        } catch (error) {
          res.status(404);
          return next(error);
        }
      }
    )(req, res);
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { ball } = req.body;
    const makerName = ball.maker;
    const targetBall = await convertBallDataToServer(ball);
    try {
      const { updateBall } = await Ball.ballUpdate(req.params.id, targetBall);
      const returnBall = convertBallDataToClient(updateBall, makerName);
      res.status(201).json({ data: { returnBall } });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
