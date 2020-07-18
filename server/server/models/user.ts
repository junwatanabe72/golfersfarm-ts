import { Model, DataTypes } from "sequelize";
import  sequelize  from '../middlewares/sequelize';
// import Post from './post';


const SEX = {
  0: "man",
  1: "woman",
};
export const sexValues = Object.values(SEX);

 class User extends Model {
   public id!: number;
 }
User.init(
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
    resience: {
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
    }
  },
  {
    tableName: 'users',
    sequelize: sequelize,
  },
);

// User.hasMany(Post);
// Post.belongsTo(User);

export default User;