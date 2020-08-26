import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./user";
import Club from "./club";

class User_clubs extends Model {
  public id!: number;
  public userId!: number;
  public clubId!: number;

  public static initialize(sequelize: Sequelize) {
    User_clubs.init(
      {
        userId: { type: DataTypes.INTEGER },
        clubId: { type: DataTypes.INTEGER },
      },
      {
        sequelize: sequelize,
        tableName: "user_clubs",
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
    this.belongsTo(Club, {
      foreignKey: "clubId",
      constraints: false,
    });
  }
}

export interface userClubsType {
  id: number;
  userId: number;
  clubId: number;
}

export default User_clubs;
