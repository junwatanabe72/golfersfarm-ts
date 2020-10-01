import { Model, DataTypes, Sequelize } from "sequelize";
import UserResults from "./user_results";

class Result extends Model {
  public id!: number;
  public name!: string;
  public date!: number;
  public rank!: string;
  public url?: string;

  static async add(id: string, result: any, sequelize: Sequelize) {
    if (!result.name) {
      return;
    }
    const newData = await sequelize.transaction(async (t) => {
      const newResult = await this.create(
        {
          ...result,
        },
        { transaction: t }
      );
      const newUserResults = await UserResults.create(
        {
          userId: parseInt(id),
          resultId: newResult.id,
        },
        { transaction: t }
      );
      // console.log({ newResult, newUserResults });
      return { newResult, newUserResults };
    });

    return { newData };
  }
  static async resultReplace(
    userId: string,
    result: any,
    sequelize: Sequelize
  ) {
    const { id } = result;
    const newResultData = { ...result, id: undefined };
    const targetResult = await this.findOne({
      where: {
        id: id,
      },
    });
    if (!targetResult) {
      return;
    }
    const targetuserResults = await UserResults.findOne({
      where: {
        userId: parseInt(userId),
        resultId: id,
      },
    });
    if (!targetuserResults) {
      return;
    }
    const newData = await sequelize.transaction(async (t) => {
      await targetResult.destroy({ transaction: t });
      await targetuserResults.destroy({ transaction: t });
      const newResult = await this.create(
        {
          ...newResultData,
        },
        { transaction: t }
      );
      const newUserResults = await UserResults.create(
        {
          userId: parseInt(userId),
          resultId: newResult.id,
        },
        { transaction: t }
      );
      return { newResult, newUserResults };
    });
    return { newData };
  }

  static async resultDelete(userId: string, result: any, sequelize: Sequelize) {
    if (!result.id) {
      return;
    }
    const { id } = result;
    const targetResult = await this.findOne({
      where: {
        id: id,
      },
    });
    if (!targetResult) {
      return;
    }
    const targetuserResults = await UserResults.findOne({
      where: {
        userId: parseInt(userId),
        resultId: id,
      },
    });
    if (!targetuserResults) {
      return;
    }
    await sequelize.transaction(async (t) => {
      await targetResult.destroy({ transaction: t });
      await targetuserResults.destroy({ transaction: t });
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
          allowNull: false,
        },
        date: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        rank: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
      },
      {
        tableName: "results",
        sequelize: sequelize,
      }
    );
    return this;
  }
  public static associate() {
    this.hasMany(UserResults, {
      foreignKey: "resultId",
      onDelete: "CASCADE",
      constraints: false,
    });
  }
}
export interface ResultType {
  id: number;
  name: string;
  date: number;
  rank: string;
  url: string;
}

export default Result;
