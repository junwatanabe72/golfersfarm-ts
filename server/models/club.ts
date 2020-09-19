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
  public shaftId!: number;
  public makerId!: number;

  static async add(id: string, club: any, sequelize: Sequelize) {
    if (!club.name) {
      return;
    }

    const newData = await sequelize.transaction(async (t) => {
      const newClub = await this.create(
        {
          ...club,
        },
        { transaction: t }
      );
      const newUserClubs = await UserClubs.create(
        {
          userId: parseInt(id),
          clubId: newClub.id,
        },
        { transaction: t }
      );
      return { newClub, newUserClubs };
    });
    return { newData };
  }
  static async clubReplace(userId: string, club: any, sequelize: Sequelize) {
    const { id } = club;
    const newClubData = { ...club, id: undefined };
    const targetClub = await this.findOne({
      where: {
        id: id,
      },
    });
    if (!targetClub) {
      return;
    }
    const targetuserClubs = await UserClubs.findOne({
      where: {
        userId: parseInt(userId),
        clubId: id,
      },
    });
    if (!targetuserClubs) {
      return;
    }
    const newData = await sequelize.transaction(async (t) => {
      await targetClub.destroy({ transaction: t });
      await targetuserClubs.destroy({ transaction: t });
      const newClub = await this.create(
        {
          ...newClubData,
        },
        { transaction: t }
      );
      const newUserClubs = await UserClubs.create(
        {
          userId: parseInt(userId),
          clubId: newClub.id,
        },
        { transaction: t }
      );
      return { newClub, newUserClubs };
    });
    return { newData };
  }

  static async clubDelete(userId: string, club: any, sequelize: Sequelize) {
    if (!club.id) {
      return;
    }
    const { id } = club;
    const targetClub = await this.findOne({
      where: {
        id: id,
      },
    });
    if (!targetClub) {
      return;
    }
    const targetuserClubs = await UserClubs.findOne({
      where: {
        userId: parseInt(userId),
        clubId: id,
      },
    });
    if (!targetuserClubs) {
      return;
    }
    await sequelize.transaction(async (t) => {
      await targetClub.destroy({ transaction: t });
      await targetuserClubs.destroy({ transaction: t });
      return;
    });
    return;
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
export type PartialClubType = Partial<clubType>;
export interface clubType {
  id: number;
  name: string;
  typeId: number;
  shaftId: number;
  makerId: number;
}

export default Club;
