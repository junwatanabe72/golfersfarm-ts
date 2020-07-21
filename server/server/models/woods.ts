import { Model, DataTypes, Sequelize } from "sequelize";
import defaultValues from "../value/model/value"
import User from "./users";
import Shaft from "./shafts";
import Maker from "./makers";

class Wood extends Model {
  public id!: number;
  public name!: string;
  public userId!: number;
  public shaftId!: number;
  public makerId!: number;
  public count!: string;

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
          defaultValue: defaultValues.wood.name,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        shaftId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: defaultValues.wood.shaftId,
        },
        makerId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: defaultValues.wood.makerId,
        },
        count: {
          type: DataTypes.STRING(250),
          allowNull: false,
          defaultValue: defaultValues.wood.count,
        },
      },
      {
        tableName: "woods",
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
    this.belongsTo(Shaft, {
      foreignKey: "shaftId",
      constraints: false,
    });
    this.belongsTo(Maker, {
      foreignKey: "makerId",
      constraints: false,
    });
  }
}

export interface woodType {
  id: number;
  name: string;
  userId: number;
  shaftId: number;
  makerId: number;
  count: string;
}

export default Wood;
