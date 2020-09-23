import { Request, Response, NextFunction } from "express";
import db from "../../models";

const Ball = db.Ball;
const Maker = db.Maker;

export default {
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const targetBall = await Ball.findOne({
        where: { userId: req.params.id },
        include: [
          {
            model: Maker,
            required: false,
          },
        ],
      });
      res.json(targetBall);
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { ball } = req.body;
    try {
      const newBall = await Ball.add(req.params.id, ball);
      res.status(201).json(newBall);
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { ball } = req.body;
    try {
      const targetBall = await Ball.updateBall(req.params.id, ball);
      res.status(201).json(targetBall);
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
