import db,{sequelize} from "../models"
const users = db.User;

export default {

  async show(id: string) {
    const user = await users.findOne({
      where: { id: id },
      raw: false,
    });
    if (!user) {
      return { message: 'no user exist' };
    }
    return user;
  },

  async index() {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUser = await users.findAll({
      // where: { status: queryStatus },
    });
    if (!allUser) {
      return { message: "not exist" };
    }
    return allUser;
  },
  async create(req: any,res: any | null) {
        const newuser = await users.create(
          {
            password: req.password,
            name: req.name,
            email: req.email,
          },res
        )
    if (!newuser) {
      return { message: "error" };
    }
        return newuser 
  },

  async update(id: string,user: any) {
    const targetuser: any = await users.findOne({
      where: { id: id }
    });
    if (!targetuser) { return { message: "check this userId" }; }

    //userを更新する。
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
    if (!targetuser) { 
      return { message: "check this userId" };
    }
    await targetuser.destroy();
    return {message: "ok"}
  }
};
