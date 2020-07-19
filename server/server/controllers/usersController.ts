import { Request, Response } from "express";
import db,{sequelize} from "../models"

const users = db.User;
const balls = db.Ball;
const woods = db.Wood;
const shafts = db.Shaft;
const makers = db.Maker;
const num = 1;
export default {
  async show(req: Request, res: Response) {
    const user = await users.findOne({
      where: { id: req.params.id },
      raw: false,
    });
    const userData = await woods.findAll({
      where: { userId: user.id },
      raw: false,
      include: [
            {
              model: shafts,
              as: "shafts",
              required: false,
            },
            {
              model: makers,
              as: "makers",
              required: false,
            },
          ],
    })
    if (!userData) {
      return res.status(404).json({ message: 'not exist' });
    }
    res.json({ userData });
  },
  async index(req: Request, res: Response) {
    // const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const allUser = await users.findAll({
      // where: { status: queryStatus },
    });
    if (!allUser) {
      return res.status(404).json({ message: "not exist" });
    }
    res.json({ allUser });
  },

//transactionを貼る。
  async create(req: any, res: Response) {
    const {
      user: { password,name,email },
    } = req.body;
    // const params = { ...rest, userId: req.user.id };
    try {
      await sequelize.transaction(async (t) => {
        const newuser = await users.create(
          {
            password: password,
            name: name,
            email: email,
          },
          { transaction: t }
        );
          await balls.create(
            {
              userId: newuser.id,
            },
            { transaction: t }
          );

        const newShaft = await shafts.findOne({
          where: { id: num }});
        const newMaker = await makers.findOne({
          where: { id: num }
        })

          await woods.create(
            {
              shaftId: newShaft.id,
              makerId: newMaker.id,
              count: "4 P",
              userId: newuser.id,
            },
            { transaction: t }
          );
       res.json({ newuser });
          })
    } catch (error) {
      res.status(400)
    }
  },

  // async update(req: any, res: Response) {
  //   const targetuser: any = await users.findOne({
  //     where: { id: req.params.id, userId: req.user.id },
  //   })
  //   if (!targetuser) { res.json({ message: "check this userId" });}
  //   const {
  //     user: { categoryIds, ...rest },
  //   } = req.body;
  //   const params = { ...rest };
  //   const updateuserId = req.params.id;
    //transactionを貼る。
    // try {
    //   await sequelize.transaction(async (t) => {
    //     //userを更新する。
    //     await targetuser.update({
    //       title: params.title,
    //       body: params.body,
    //       status: params.status,
    //       },
    //       { transaction: t }
    //     );

        // if (categoryIds.length === 0) {
        //   res.json({});
        // }
        //categoryを更新する。（新しくカテゴリ登録する。）
        // for (let element of categoryIds) {
        //   await userCategories.findOrCreate(
        //     {
        //       where: { userId: updateuserId, categoryId: element },
        //       defaults: {
        //         // 新規登録するデータ
        //         userId: updateuserId,
        //         categoryId: element
        //       },
        //       transaction: t 
        //     }
        //   );
        // }
        // const changeduser_categories = await userCategories.findAll({
        //   where: {
        //     userId: updateuserId,
        //     categoryId: { [Op.notIn]: categoryIds },
        //   },
        //   transaction: t,
        // });
      //categoryを更新する。（該当しないカテゴリを削除する。）
    //     for (let element of changeduser_categories) {
    //       await userCategories.destroy(
    //           {
    //             where: { userId: updateuserId, categoryId: element.categoryId }
    //             ,
    //            transaction: t 
    //           }
    //         );
    //     }
    //     res.json({});
    //   });
    // } catch (error) {
    //     res.status(400);
    // }
  // },
  
  async delete(req: any, res: Response) {
    const targetuser: any = await users.findOne({
      where: { id: req.params.id, userId: req.user.id },
    })
    if (!targetuser) { 
      res.json({ message: "check this userId" });
    }

    await targetuser.destroy();
    res.json({});
  }
};
