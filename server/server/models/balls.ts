import { Model, DataTypes, Sequelize } from "sequelize";
import defaultValues from "../value/model/value"
import User from "./users";
import Maker from "./makers";



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
          defaultValue: defaultValues.ball.name,
          allowNull: false,

        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        makerId: {
          type: DataTypes.INTEGER, 
          allowNull: false,
          defaultValue: defaultValues.ball.makerId,
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
