import { Request, Response, NextFunction } from "express";
import db from "../models";

const balls = db.Ball;
const makers = db.Maker;

export default {
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const targetBall = await balls.findOne({
        where: { userId: req.params.id },
        raw: false,
        include: [
          {
            model: makers,
            required: false,
          },
        ],
      });
      res.json({ targetBall });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { ball } = req.body;
    try {
      const updateBall = await balls.updateBall(req.params.id, ball);
      res.status(201).json({ updateBall });
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },

  //今のところ使わない。
  // async index() {
  //   // const queryStatus: any = req.query.status ? req.query.status : statusValues;
  //   const allBall = await balls.findAll({
  //     // where: { status: queryStatus },
  //   });
  //   return allBall;
  // },
  // async delete(id: string) {
  //   const targetBall: any = await balls.findOne({
  //     where: { id: id },
  //   })
  //   await targetBall.destroy();
  //   return { message: "ok" }
  // }
};
