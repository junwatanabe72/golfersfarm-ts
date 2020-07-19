import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./users";
import Maker from "./makers";


class Ball extends Model {
  public id!: number;
  public name: string | undefined;
  public userId!: number;
  public makerId: number | undefined;

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
        makerId: {
          type: DataTypes.INTEGER,
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

export default Ball;
