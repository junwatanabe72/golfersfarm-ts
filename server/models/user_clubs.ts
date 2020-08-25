import { Model, DataTypes, Sequelize } from "sequelize";
import User from "./user";
import Club from "./club";

class User_clubs extends Model {
  public id!: number;
  public userId!: number;
  public clubId!: number;

  static async add(data: any) {
    const newTable = await this.create({
      userId: data.userId,
      clubId: data.clubId,
    });
    return [{ newTable }];
  }

  // static async updateProfile(data: any) {
  //   const targetUser: any = await this.findOne({
  //     where: { id: user.id },
  //   });
  //   const updateUser = await targetUser.update({
  //     sex: user.sex,
  //     residence: user.residence,
  //     averageDistance: user.averageDistance,
  //     bestScore: user.bestScore,
  //     email: user.email,
  //     job: user.job,
  //     profileImage: user.profileImage,
  //     clubImage: user.clubImage,
  //     school: user.school,
  //     hobby: user.hobby,
  //     facebook: user.facebook,
  //     twitter: user.twitter,
  //     instagram: user.instagram,
  //     youtube: user.youtube,
  //     show: user.show,
  //   });
  //   return { updateUser };
  // }

  public static initialize(sequelize: Sequelize) {
    User_clubs.init(
      {
        userId: { type: DataTypes.INTEGER },
        clubId: { type: DataTypes.INTEGER },
      },
      {
        sequelize: sequelize,
        tableName: "user_clubs",
      }
    );
    return this;
  }

  public static associate() {
    // define association here
    this.belongsTo(User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      constraints: false,
    });
    this.belongsTo(Club, {
      foreignKey: "clubId",
      constraints: false,
    });
  }
}

export interface userClubsType {
  id: number;
  userId: number;
  clubId: number;
}

export default User_clubs;
