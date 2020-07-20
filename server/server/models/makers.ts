import { Model, DataTypes, Sequelize } from "sequelize";
import Ball from "./balls";
import Wood from "./woods";

// const models:any =[Ball,Wood]

class Maker extends Model {
  public id!: number;
  public name!: string;

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
      },
      {
        tableName: "makers",
        sequelize: sequelize,
      }
    );
  return this;
  }
  public static associate() {

    // for (const model of models){
    //   this.hasMany(model, {
    //     sourceKey: 'id',
    //     foreignKey: 'makerId',
    //     constraints: false
    //   });
    // }
    this.hasMany(Ball, {
      sourceKey: 'id',
      foreignKey: 'makerId',
      constraints: false
    });
    this.hasMany(Wood, {
      sourceKey: 'id',
      foreignKey: 'makerId',
      constraints: false
    });
  }
}

export default Maker;
