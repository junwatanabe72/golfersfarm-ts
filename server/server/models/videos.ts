import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./users";

class Video extends Model {
  public id!: number;
  public name!: string;
  public userId!: number;
  public url!: string;

  public static initialize(sequelize: Sequelize){
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
}

export default Video;
