import { Model, DataTypes, Sequelize } from "sequelize";
import Club from "./club";

class Shaft extends Model {
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
        tableName: "shafts",
        sequelize: sequelize,
      }
    );
    return this;
  }
  public static associate() {
    this.hasMany(Club, {
      sourceKey: "id",
      foreignKey: "shaftId",
      constraints: false,
    });
  }
}
export type PartialShaftType = Partial<ShaftType>;
export interface ShaftType {
  id: number;
  name: string;
}
export default Shaft;
