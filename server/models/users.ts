import { Model, DataTypes, Sequelize } from "sequelize";
import Ball from './balls';
import Club from './clubs';

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
  
  static async add(user: User, db: Sequelize ) {
    await db.transaction(async (t) => {
      const newUser = await this.create(
        {
          password: user.password,
          name: user.name,
          email: user.email,
        }, { transaction: t }
      );
      const newBall = await Ball.create({
        userId: newUser.id
      }, { transaction: t }
      );
      const newClub = await Club.create({
        name: "original",
        userId: newUser.id,
        shaftId: 1,
        makerId: 1,
        typeId: 1,
      }, { transaction: t }
      );
      return [{ newUser }, { newClub} ,{ newBall }]
    })
  }

  static async updateProfile(user:User) {
    const targetUser: any = await this.findOne({
        where: { id: user.id }
      });
      const updateUser = await targetUser.update({
        sex: user.sex,
        residence: user.residence,
        averageDistance: user.averageDistance,
        bestScore: user.bestScore,
        email: user.email,
        job: user.job,
        profileImage: user.profileImage,
        clubImage: user.clubImage,
      });
      return {updateUser}
    }

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
    this.hasMany(Club, {
      sourceKey: 'id',
      foreignKey: 'userId',
      constraints: false
    });
  }
}

export interface userType {
  id: number;
  name: string;
  sex: string | undefined;
  residence: string | undefined;
  birthPlace: string | undefined;
  averageDistance: number | undefined;
  bestScore: number | undefined;
  email: string;
  password: string;
  job: string | undefined;
  profileImage: string | undefined;
  clubImage: string | undefined;
  add: ()=> void;
  updateProfile: ()=> void;
}

export default User;