import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./users";
import Shaft from "./shafts";
import Maker from "./makers";

class Wood extends Model {
  public id!: number;
  public name: string | undefined;
  public userId!: number | undefined;
  public shaftId: number | undefined;
  public makerId: number | undefined;
  public count: string | undefined;

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
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        shaftId: {
          type: DataTypes.INTEGER,
        },
        makerId: {
          type: DataTypes.INTEGER,
        },
        count: {
          type: DataTypes.STRING(250),
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

export default Wood;
