import { Model, DataTypes, Sequelize } from "sequelize";
// import sequelize from "../middlewares/sequelize";
import Ball from './balls';
import Wood from './woods';


const SEX = {
  0: "man",
  1: "woman",
};
export const sexValues = Object.values(SEX);

class User extends Model {
  public id!: number;
  public name!: string;
  public sex: string | undefined;
  public residence: string | undefined;
  public birthPlace: string | undefined;
  public averageDistance: number | undefined;
  public bestScore: number | undefined;
  public email!: string;
  public password!: string;
  public job: string | undefined;
  public profileImage: string | undefined;
  public clubImage: string | undefined;
  
  
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
    sex: {
      type: DataTypes.STRING(250),
    },
    residence: {
      type: DataTypes.STRING(250),
    },
    birthPlace: {
      type: DataTypes.STRING(250),
    },
    averageDistance: {
      type: DataTypes.INTEGER,
    },
    bestScore: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
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
    this.hasMany(Wood, {
      sourceKey: 'id',
      foreignKey: 'userId',
      constraints: false
    });
  }
}

export default User;