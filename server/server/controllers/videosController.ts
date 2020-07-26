import { Request, Response, NextFunction } from "express";
import db from "../models"

const videos = db.Video;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    try {
      const allVideos = await videos.findAll({
        where: { userId: req.params.id },
        raw: false,
      })
      if (!allVideos) {
        res.status(204).json({ message: 'not exist' });
      } else {
        res.json({ allVideos });
      }
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { video } = req.body;
    try {
      const newVideo = await videos.add(req.params.id,video);
      res.status(201).json({ newVideo });
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    const { video } = req.body;
    try {
      const updateVideo = await videos.updateDatas(video);
      if (!updateVideo) {
        return res.status(404)
      } else {
        res.status(201).json({ updateVideo });
      }
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
 
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      videos.findOne({
        where: { id: req.params.videoId, userId: req.params.id },
      })
      res.status(204).json({});
    } catch (error) {
      res.status(404)
      return next(error)
    }
  },
  
  // async show(id: number, transaction: any | null) {
  //   const targetVideo = await videos.findOne({
  //     where: { userId: id },
  //     raw: false,
  //   }, transaction)
  //   return targetVideo;
  // },
};
