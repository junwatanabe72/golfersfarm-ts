import { Model, DataTypes, Sequelize } from "sequelize";
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

  static async add(id: number) {
    const newBall = await this.create({
      ...ball,
      userId: id,
    });
    return { newBall };
  }

  static async ballUpdate(id: string, ball: ballType) {
    const targetBall: any = await this.findOne({
      where: { userId: parseInt(id) },
    });
    const updateBall = await targetBall.update({
      ...ball,
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
