import { Request, Response, NextFunction } from "express";
import passport from "passport";
import db, { sequelize } from "../../models";
import {
  convertArrayVideoDataToClient,
  convertCreateVideoDataToClient,
  convertVideoDataToServer,
  convertVideoDataToClient,
} from "../../utils/convert/video";

const Video = db.Video;
const UserVideos = db.UserVideos;

export default {
  async index(req: Request, res: Response) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          const targetVideos = await UserVideos.findAll({
            where: { userId: req.params.id },
            include: [
              {
                model: Video,
                required: false,
              },
            ],
          });

          if (!targetVideos) {
            res.status(400);
            return;
          }
          // serverのvideo型をclient型に変換
          const allVideos = convertArrayVideoDataToClient(targetVideos);
          res.status(200).json({ data: { allVideos } });
        } catch (error) {
          res.status(404);
          return;
        }
      }
    )(req, res);
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { video } = req.body;
    try {
      const data = await video.add(req.params.id, video, sequelize);
      // serverのvideo型をclient型に変換
      const newVideo = convertCreateVideoDataToClient(data);
      res.status(201).json({ newVideo });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  async replace(req: Request, res: Response, next: NextFunction) {
    const { video } = req.body;

    try {
      const targetVideos = await Promise.all(
        video.map(async (value: any) => {
          // clientのvideo型をserver型に変換
          const targetVideo = convertVideoDataToServer(value);

          if (!targetVideo.id) {
            const { newData } = await Video.add(
              req.params.id,
              targetVideo,
              sequelize
            );
            // serverのvideo型をclient型に変換
            const video = convertVideoDataToClient(newData);
            return video;
          }
          if (!targetVideo.name) {
            await Video.videoDelete(req.params.id, targetVideo, sequelize);
            return;
          }

          const { newData } = await Video.videoReplace(
            req.params.id,
            targetVideo,
            sequelize
          );
          // serverのvideo型をclient型に変換
          const video = convertVideoDataToClient(newData);
          return video;
        })
      );
      const updateVideos = targetVideos.filter((value) => value);

      res.status(201).json({ data: { updateVideos } });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
