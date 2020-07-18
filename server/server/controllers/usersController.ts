import { Request, Response } from "express";
import { Op } from "sequelize";
import sequelize from "../middlewares/sequelize";
import users from "../models/user";
// import userCategories from "../models/userCategory";
import categories from "../models/category";

export default {
  async show(req: Request, res: Response) {
    const user = await users.findOne({
      where: { id: req.params.id },
      raw: false,
      include: [
        {
          model: userCategories,
          as: "user_categories",
          required: false,
          include: [
            {
              model: categories,
              as: "categories",
              required: false,
            },
          ],
        },
      ],
    });
    if (!user) {
      return res.status(404).json({ message: 'not exist' });
    }
    res.json({ user });
  },
  async index(req: Request, res: Response) {
    const queryStatus: any = req.query.status ? req.query.status : statusValues;
    const user = await users.findAll({
      where: { status: queryStatus },
      raw: false,
      include: [
        {
          model: userCategories,
          as: "user_categories",
          required: false,
          include: [
            {
              model: categories,
              as: "categories",
              required: false,
            },
          ],
        },
      ],
    });
    if (!user) {
      return res.status(404).json({ message: "not exist" });
    }
    res.json({ user });
  },

//transactionを貼る。
  async create(req: any, res: Response) {
    const {
      user: { categoryIds, ...rest },
    } = req.body;
    const params = { ...rest, userId: req.user.id };
    try {
      await sequelize.transaction(async (t) => {
        const newuser = await users.create(
          {
            title: params.title,
            body: params.body,
            status: params.status,
            userId: params.userId,
          },
          { transaction: t }
        );
        for (let element of categoryIds) {
          await userCategories.create(
            {
              userId: newuser.id,
              categoryId: element,
            },
            { transaction: t }
          );
        }
       res.json({ newuser });
          })
    } catch (error) {
      res.status(400)
    }
  },

  async update(req: any, res: Response) {
    const targetuser: any = await users.findOne({
      where: { id: req.params.id, userId: req.user.id },
    })
    if (!targetuser) { res.json({ message: "check this userId" });}
    const {
      user: { categoryIds, ...rest },
    } = req.body;
    const params = { ...rest };
    const updateuserId = req.params.id;
    //transactionを貼る。
    try {
      await sequelize.transaction(async (t) => {
        //userを更新する。
        await targetuser.update({
          title: params.title,
          body: params.body,
          status: params.status,
          },
          { transaction: t }
        );

        if (categoryIds.length === 0) {
          res.json({});
        }
        //categoryを更新する。（新しくカテゴリ登録する。）
        for (let element of categoryIds) {
          await userCategories.findOrCreate(
            {
              where: { userId: updateuserId, categoryId: element },
              defaults: {
                // 新規登録するデータ
                userId: updateuserId,
                categoryId: element
              },
              transaction: t 
            }
          );
        }
        const changeduser_categories = await userCategories.findAll({
          where: {
            userId: updateuserId,
            categoryId: { [Op.notIn]: categoryIds },
          },
          transaction: t,
        });
      //categoryを更新する。（該当しないカテゴリを削除する。）
        for (let element of changeduser_categories) {
          await userCategories.destroy(
              {
                where: { userId: updateuserId, categoryId: element.categoryId }
                ,
               transaction: t 
              }
            );
        }
        res.json({});
      });
    } catch (error) {
        res.status(400);
    }
  },
  
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
