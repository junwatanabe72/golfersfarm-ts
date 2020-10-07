import { Request, Response, NextFunction } from "express";
import db from "../../models";
import { formUpdate } from "../../utils/Form/ball";
import passport from "passport";
import { serializeIndex, serializeUpdate } from "../../utils/Serialize/ball";

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
          const targetBall = serializeIndex(ball);
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
    const targetMaker = await Maker.findOne({
      where: {
        name: makerName,
      },
    });
    // client=>serverにデータ変換。
    const targetBall = formUpdate(ball, targetMaker.id);
    try {
      const { updateBall } = await Ball.ballUpdate(req.params.id, targetBall);
      // server=>clientにデータ変換。
      const returnBall = serializeUpdate(updateBall, makerName);
      res.status(201).json({ data: { returnBall } });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
