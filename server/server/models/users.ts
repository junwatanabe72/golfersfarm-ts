import { Model, DataTypes, Sequelize } from "sequelize";
// import sequelize from "../middlewares/sequelize";
import Ball from './balls';

const SEX = {
  0: "man",
  1: "woman",
};
export const sexValues = Object.values(SEX);

class User extends Model {
  
  public id!: number;
  public password!: string;
  
  public static initialize(sequelize: Sequelize){
    this.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sex: {
      type: DataTypes.INTEGER,
    },
    residence: {
      type: DataTypes.INTEGER,
    },
    birthPlace: {
      type: DataTypes.INTEGER,
    },
    averageDistance: {
      type: DataTypes.INTEGER,
    },
    bestScore: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING(250),
    },
    password: {
      type: DataTypes.STRING(250),
    },
    job: {
      type: DataTypes.STRING(250),
    },
    profileImage: {
      type: DataTypes.STRING(250),
    },
    clubImage: {
      type: DataTypes.STRING(250),
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
  }
);
  return this;
}

public static associate() {
    this.hasOne(Ball, {
      sourceKey: 'id',
      foreignKey: 'userId',
      constraints: false
    });
  }
}

export default User;