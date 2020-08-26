import { Model, DataTypes, Sequelize } from "sequelize";
import Club from "./club";

class ClubType extends Model {
  public id!: number;
  public type!: string;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        type: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
      },
      {
        tableName: "clubTypes",
        sequelize: sequelize,
      }
    );
    return this;
  }
  public static associate() {
    this.hasMany(Club, {
      sourceKey: "id",
      foreignKey: "typeId",
      constraints: false,
    });
  }
}

export default ClubType;
