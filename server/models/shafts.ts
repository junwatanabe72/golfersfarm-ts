import { Model, DataTypes, Sequelize } from "sequelize";
import Club from "./clubs";

class Shaft extends Model {
  public id!: number;
  public name!: string;
  public flex!: string;
  public manufacturer!: string;

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
          allowNull: false,
        },
        flex: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        manufacturer: {
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
      sourceKey: 'id',
      foreignKey: 'shaftId',
      constraints: false
    });
  }
}

export default Shaft;
