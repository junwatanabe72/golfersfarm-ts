import { Model, DataTypes, Sequelize } from "sequelize";
import Ball from "./ball";
import ClubType from "./clubType";
import UserClubs from "./userClubs";
import UserResults from "./userResults";
import UserVideos from "./userVideos";
const fs = require("fs");

class User extends Model {
  public id!: number;
  public name!: string;
  public sex!: number;
  public show!: number;
  public email!: string;
  public password!: string;
  public typeId!: number;
  public residence?: string;
  public birthPlace?: string;
  public averageDistance?: number;
  public bestScore?: number;
  public job?: string;
  public profileImage?: string;
  public clubImage?: string;
  public school?: string;
  public hobby?: string;
  public facebook?: string;
  public twitter?: string;
  public instagram?: string;
  public youtube?: string;
  public favourite?: string;
  public blood?: number;
  public history?: number;
  public hcap?: number;
  public classification?: number;
  // public ?: string;
  // 得意クラブ:goodClub,血液型:blood,好きなゴルファー:favourite,ゴルフ歴:history,hcap:ハンデ

  static async add(user: User) {
    const newUser = await this.create({
      ...user,
    });
    return newUser;
  }

  static async updateProfile(id: string, user: any) {
    let profilePath: any = {};
    const targetUser: any = await this.findOne({
      where: { id: id },
    });

    if (user.profileImage && targetUser.profileImage) {
      const start = "./public/";
      const end = targetUser.profileImage.slice(22);
      profilePath["profile"] = start + end;
    }
    if (user.clubImage && targetUser.clubImage) {
      const start = "./public/";
      const end = targetUser.clubImage.slice(22);
      profilePath["club"] = start + end;
    }

    const updateUser = await targetUser.update({
      ...user,
    });

    const values = Object.values(profilePath);
    if (values.length !== 0) {
      values.map(async (value: any) => {
        if (!fs.existsSync(value)) {
          return;
        }
        await fs.unlink(value, (err: any) => {
          if (err) throw err;
          console.log("削除しました");
        });
      });
    }
    return { updateUser };
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
        email: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        sex: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        show: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 100,
        },
        typeId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
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
        homeCourse: {
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
        school: {
          type: DataTypes.STRING(250),
        },
        hobby: {
          type: DataTypes.STRING(250),
        },
        facebook: {
          type: DataTypes.STRING(250),
        },
        twitter: {
          type: DataTypes.STRING(250),
        },
        instagram: {
          type: DataTypes.STRING(250),
        },
        youtube: {
          type: DataTypes.STRING(250),
        },
        favourite: {
          type: DataTypes.STRING(250),
        },
        blood: {
          type: DataTypes.INTEGER,
          defaultValue: 1,
        },
        history: {
          type: DataTypes.INTEGER,
          defaultValue: 1,
        },
        hcap: {
          type: DataTypes.INTEGER,
        },
        classification: {
          type: DataTypes.INTEGER,
          defaultValue: 100,
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
      sourceKey: "id",
      foreignKey: "userId",
      constraints: false,
    });
    this.hasMany(UserClubs, {
      sourceKey: "id",
      foreignKey: "userId",
      constraints: false,
    });
    this.hasMany(UserVideos, {
      sourceKey: "id",
      foreignKey: "videoId",
      constraints: false,
    });
    this.hasMany(UserResults, {
      sourceKey: "id",
      foreignKey: "resultId",
      constraints: false,
    });
    this.belongsTo(ClubType, {
      foreignKey: "typeId",
      constraints: false,
    });
  }
}

export interface UserType {
  id: number;
  name: string;
  sex: number;
  show: number;
  email: string;
  password: string;
  typeId: number;
  residence?: string;
  birthPlace?: string;
  averageDistance?: number;
  bestScore?: number;
  job?: string;
  profileImage?: string;
  clubImage?: string;
  school?: string;
  hobby?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  favourite?: string;
  blood?: number;
  history?: number;
  hcap?: number;
  classification?: number;
}

export default User;
