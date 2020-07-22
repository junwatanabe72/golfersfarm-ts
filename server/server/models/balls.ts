import { Model, DataTypes, Sequelize } from "sequelize";
// const woodss = require("../values/modelValues");
import User from "./users";
import Maker from "./makers";

const ball =  {
  name: "anything",
  makerId: 1,
}

class Ball extends Model {
  public id!: number;
  public name: string | undefined;
  public userId!: number;
  public makerId!: number;

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
