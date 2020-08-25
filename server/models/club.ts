import { Model, DataTypes, Sequelize } from "sequelize";
// import defaultValues from "../values/modelValues"
// const woodss = require("../values/modelValues");
import User from "./user";
import ClubType from "./clubType";
import UserClubs from "./user_clubs";
import Shaft from "./shaft";
import Maker from "./maker";

const club = {
  name: "original",
  shaftId: 1,
  makerId: 1,
  typeId: 1,
};

class Club extends Model {
  public id!: number;
  public name!: string;
  public typeId!: number;
  // public userId!: number;
  public shaftId!: number;
  public makerId!: number;

  static async clubUpdate(id: string, club: clubType) {
    const targetClub: any = await this.findOne({
      where: {
        id: club.id,
        // userId: id,
      },
    });
    const updateClub = await targetClub.update({
      name: club.name,
      typeId: club.typeId,
      shaftId: club.shaftId,
      makerId: club.makerId,
    });
    return updateClub;
  }
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
          defaultValue: club.name,
          allowNull: false,
        },
        // userId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        // },
        typeId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: club.typeId,
        },
        shaftId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: club.shaftId,
        },
        makerId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: club.makerId,
        },
      },
      {
        tableName: "clubs",
        sequelize: sequelize,
      }
    );
    return this;
  }
  public static associate() {
    // this.belongsTo(User, {
    //   foreignKey: "userId",
    //   onDelete: "CASCADE",
    //   constraints: false,
    // });
    this.hasMany(UserClubs, {
      sourceKey: "id",
      foreignKey: "clubId",
      constraints: false,
    });
    this.belongsTo(Shaft, {
      foreignKey: "shaftId",
      constraints: false,
    });
    this.belongsTo(Maker, {
      foreignKey: "makerId",
      constraints: false,
    });
    this.belongsTo(ClubType, {
      foreignKey: "typeId",
      constraints: false,
    });
  }
}

export interface clubType {
  id: number;
  name: string;
  typeId: number;
  // userId: number;
  shaftId: number;
  makerId: number;
}

export default Club;
