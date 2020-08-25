import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./user";

class Video extends Model {
  public id!: number;
  public name!: string;
  public userId!: number;
  public url!: string;

  static async add(id: string, video: Video) {
    const newVideo = await this.create({
      userId: id,
      name: video.name,
      url: video.url,
    });
    return { newVideo };
  }

  static async updateDatas(video: Video) {
    const targetVideo: any = await this.findOne({
      where: { id: video.id },
    });
    const updateVideo = await targetVideo.update({
      name: video.name,
      url: video.url,
    });
    return { updateVideo };
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
        userId: {
          type: DataTypes.INTEGER,
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
    this.belongsTo(User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      constraints: false,
    });
  }
}
export interface videoType {
  id: number;
  name: string;
  userId: number;
  url: string;
  add: () => void;
  updateDatas: () => void;
}

export default Video;
