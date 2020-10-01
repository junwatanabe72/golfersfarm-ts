import { Model, DataTypes, Sequelize } from "sequelize";
import Ball from "./ball";
import UserClubs from "./user_clubs";
import UserVideos from "./user_videos";

class User extends Model {
  public id!: number;
  public name!: string;
  public sex?: string;
  public residence?: string;
  public birthPlace?: string;
  public averageDistance?: number;
  public bestScore?: number;
  public email!: string;
  public password!: string;
  public job?: string;
  public profileImage?: string;
  public clubImage?: string;
  public school?: string;
  public hobby?: string;
  public facebook?: string;
  public twitter?: string;
  public instagram?: string;
  public youtube?: string;
  public show!: boolean;

  static async add(user: User) {
    const newUser = await this.create({
      ...user,
    });
    return newUser;
  }

  static async updateProfile(id: string, user: any) {
    const targetUser: any = await this.findOne({
      where: { id: id },
    });

    const updateUser = await targetUser.update({
      ...user,
    });
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
        homeCourse: {
          type: DataTypes.STRING(250),
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
        school: { type: DataTypes.STRING(250) },
        hobby: { type: DataTypes.STRING(250) },
        facebook: { type: DataTypes.STRING(250) },
        twitter: { type: DataTypes.STRING(250) },
        instagram: { type: DataTypes.STRING(250) },
        youtube: { type: DataTypes.STRING(250) },
        show: { type: DataTypes.BOOLEAN, defaultValue: false },
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
  }
}

export interface userType {
  id: number;
  name: string;
  sex?: string;
  residence?: string;
  birthPlace?: string;
  averageDistance?: number;
  bestScore?: number;
  email: string;
  password: string;
  job?: string;
  profileImage?: string;
  clubImage?: string;
  school?: string;
  hobby?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  show: boolean;
}

export default User;
