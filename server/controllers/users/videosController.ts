import { Request, Response, NextFunction } from "express";
import db from "../../models";

const Video = db.Video;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    try {
      const allVideos = await Video.findAll({
        where: { userId: req.params.id },
        raw: false,
      });
      if (!allVideos) {
        res.status(204).json({ message: "not exist" });
      } else {
        res.json({ allVideos });
      }
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { video } = req.body;
    try {
      const newVideo = await Video.add(req.params.id, video);
      res.status(201).json({ newVideo });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { video } = req.body;
    try {
      const updateVideo = await Video.updateDatas(video);
      if (!updateVideo) {
        return res.status(400);
      } else {
        res.status(201).json({ updateVideo });
      }
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      Video.findOne({
        where: { id: req.params.videoId, userId: req.params.id },
      });
      res.status(204).json({});
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
};
