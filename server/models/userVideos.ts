import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./user";
import Video from "./video";

class UserVideos extends Model {
  public id!: number;
  public userId!: number;
  public videoId!: number;

  public static initialize(sequelize: Sequelize) {
    UserVideos.init(
      {
        id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: DataTypes.INTEGER },
        videoId: { type: DataTypes.INTEGER },
      },
      {
        sequelize: sequelize,
        tableName: "user_videos",
      }
    );
    return this;
  }

  public static associate() {
    // define association here
    this.belongsTo(User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      constraints: false,
    });
    this.belongsTo(Video, {
      foreignKey: "videoId",
      constraints: false,
    });
  }
}

export interface UserVideosType {
  id: number;
  userId: number;
  videoId: number;
}

export default UserVideos;
