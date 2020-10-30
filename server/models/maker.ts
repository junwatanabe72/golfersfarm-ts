import { Model, DataTypes, Sequelize } from "sequelize";
import Ball from "./ball";
import Club from "./club";

// const models:any =[Ball,Wood]

class Maker extends Model {
  public id!: number;
  public name!: string;

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
          allowNull: false,
        },
      },
      {
        tableName: "makers",
        sequelize: sequelize,
      }
    );
    return this;
  }
  public static associate() {
    this.hasMany(Ball, {
      sourceKey: "id",
      foreignKey: "makerId",
      constraints: false,
    });
    this.hasMany(Club, {
      sourceKey: "id",
      foreignKey: "makerId",
      constraints: false,
    });
  }
}
export type PartialMakerType = Partial<MakerType>;
export interface MakerType {
  id: number;
  name: string;
}

export default Maker;
