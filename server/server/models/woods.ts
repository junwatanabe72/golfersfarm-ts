import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./users";

class Ball extends Model {
  public id!: number;
  public userId!: number;
  public maker!: string;

  public static initialize(sequelize: Sequelize){
    this.init(
      {
        id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        maker: {
          type: DataTypes.STRING(250),
          defaultValue: "Titleist pro-v1x",
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
  }
}

export default Ball;
