import db from "../models"
import { videoType } from "../models/videos";

const videos = db.Video;

export default {
  // async show(id: number, transaction: any | null) {
  //   const targetVideo = await videos.findOne({
  //     where: { userId: id },
  //     raw: false,
  //   }, transaction)
  //   return targetVideo;
  // },
  async index(id: string, transaction: any | null) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allVideos = await videos.findAll({
      where: { userId: id },
      raw: false,
    }, transaction)
    return allVideos;
  },
  async create(id: string, video: videoType,transaction: any | null) {
    const newVideo = await videos.create({
          userId: id,
          name: video.name,
          url: video.url,
        },transaction
      );
    return newVideo;
  },
  async update(id: string, videoId: string, video: videoType) {
    const targetVideo: any = await videos.findOne({
      where: { id: videoId, userId: id }
    });
    
    //woodを更新する。
    const updateVideo = await targetVideo.update({
      name: video.name,
      url: video.url,
    });
    return  updateVideo;
  },
  async delete(id: string,videoId: string) {
    const targetVideo: any = await videos.findOne({
      where: { id: videoId, userId: id },
    })
    await targetVideo.destroy();
    return { message: "ok" }
  }
};
