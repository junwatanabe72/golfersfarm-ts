import { Model, DataTypes, Sequelize } from "sequelize";
// const woodss = require("../values/modelValues");
import User from "./user";
import Maker from "./maker";

const ball = {
  name: "anything",
  makerId: 1,
};

class Ball extends Model {
  public id!: number;
  public name: string | undefined;
  public userId!: number;
  public makerId!: number;

  static async add(id: string, ball: ballType) {
    const newBall = await this.create({
      name: ball.name,
      userId: parseInt(id),
      makerId: ball.makerId,
    });
    return { newBall };
  }

  static async updateBall(id: string, ball: ballType) {
    const targetBall: any = await this.findOne({
      where: { userId: parseInt(id) },
    });
    const updateBall = await targetBall.update({
      name: ball.name,
      makerId: ball.makerId,
    });
    return { updateBall };
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
          defaultValue: ball.name,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        makerId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: ball.makerId,
        },
      },
      {
        tableName: "balls",
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
    this.belongsTo(Maker, {
      foreignKey: "makerId",
      constraints: false,
    });
  }
}

export interface ballType {
  id: number;
  name: string;
  userId: number;
  makerId: number;
}

export default Ball;
