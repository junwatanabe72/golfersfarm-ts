import db, { sequelize } from "../models"
import {userType} from "../models/users";
const users = db.User;

export default {

  async show(id: string, transaction: any | null) {
    const user = await users.findOne({
      where: { id: id },
      raw: false,
    }, transaction);
    return user;
  },
  async index() {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUsers = await users.findAll({
      // where: { status: queryStatus },
    });
    return allUsers;
  },
  
  async create(user: userType, transaction: any | null) {
        const newuser = await users.create(
          {
            password: user.password,
            name: user.name,
            email: user.email,
          }, transaction
        )
      return newuser 
  },

  async update(id: string, user: userType) {
    const targetuser: any = await users.findOne({
      where: { id: id }
    });
    const updateUser = await targetuser.update({
      sex: user.sex,
      residence: user.residence,
      averageDistance: user.averageDistance,
      bestScore: user.bestScore,
      email: user.email,
      job: user.job,
      profileImage: user.profileImage,
      clubImage: user.clubImage,
    });
    
    return updateUser;
  },
  async delete(id: string) {
    const targetuser: any = await users.findOne({
      where: { id: id },
    })
    await targetuser.destroy();
    return {message: "ok"}
  }
};
