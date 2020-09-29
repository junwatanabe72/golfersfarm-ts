import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./user";
import UserVideos from "./user_videos";

const baseURL = "https://www.youtube.com/embed/";
class Video extends Model {
  public id!: number;
  public name!: string;
  public url!: string;

  static async add(id: string, video: any, sequelize: Sequelize) {
    if (!video.name) {
      return;
    }
    const newData = await sequelize.transaction(async (t) => {
      const newVideo = await this.create(
        {
          ...video,
          url: baseURL + video.url,
        },
        { transaction: t }
      );
      const newUserVideos = await UserVideos.create(
        {
          userId: parseInt(id),
          videoId: newVideo.id,
        },
        { transaction: t }
      );
      console.log({ newVideo, newUserVideos });
      return { newVideo, newUserVideos };
    });

    return { newData };
  }
  static async videoReplace(userId: string, video: any, sequelize: Sequelize) {
    const { id } = video;
    const newVideoData = { ...video, id: undefined };
    const targetVideo = await this.findOne({
      where: {
        id: id,
      },
    });
    if (!targetVideo) {
      return;
    }
    const targetuserVideos = await UserVideos.findOne({
      where: {
        userId: parseInt(userId),
        videoId: id,
      },
    });
    if (!targetuserVideos) {
      return;
    }
    const newData = await sequelize.transaction(async (t) => {
      await targetVideo.destroy({ transaction: t });
      await targetuserVideos.destroy({ transaction: t });
      const newVideo = await this.create(
        {
          ...newVideoData,
          url: baseURL + newVideoData.url,
        },
        { transaction: t }
      );
      const newUserVideos = await UserVideos.create(
        {
          userId: parseInt(userId),
          videoId: newVideo.id,
        },
        { transaction: t }
      );
      return { newVideo, newUserVideos };
    });
    return { newData };
  }

  static async videoDelete(userId: string, video: any, sequelize: Sequelize) {
    if (!video.id) {
      return;
    }
    const { id } = video;
    const targetVideo = await this.findOne({
      where: {
        id: id,
      },
    });
    if (!targetVideo) {
      return;
    }
    const targetuserVideos = await UserVideos.findOne({
      where: {
        userId: parseInt(userId),
        videoId: id,
      },
    });
    if (!targetuserVideos) {
      return;
    }
    await sequelize.transaction(async (t) => {
      await targetVideo.destroy({ transaction: t });
      await targetuserVideos.destroy({ transaction: t });
      return;
    });
    return;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
      },
      {
        tableName: "videos",
        sequelize: sequelize,
      }
    );
    return this;
  }
  public static associate() {
    this.hasMany(UserVideos, {
      foreignKey: "videoId",
      onDelete: "CASCADE",
      constraints: false,
    });
  }
}
export interface videoType {
  id: number;
  name: string;
  url: string;
  add: () => void;
  updateDatas: () => void;
}

export default Video;
