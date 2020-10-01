import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./user";
import Result from "./result";

class User_results extends Model {
  public id!: number;
  public userId!: number;
  public resultId!: number;

  public static initialize(sequelize: Sequelize) {
    User_results.init(
      {
        id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: DataTypes.INTEGER },
        resultId: { type: DataTypes.INTEGER },
      },
      {
        sequelize: sequelize,
        tableName: "user_results",
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
    this.belongsTo(Result, {
      foreignKey: "resultId",
      constraints: false,
    });
  }
}

export interface userResultsType {
  id: number;
  userId: number;
  resultId: number;
}

export default User_results;
