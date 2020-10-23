import { Request, Response, NextFunction } from "express";
import db from "../../models";
import { UserType } from "../../models/user";
import passport from "passport";
import { serializeIndex, serializeUpdate } from "../../utils/Serialize/user";
import { formUpdate } from "../../utils/Form/user";
import { Op } from "sequelize";

const User = db.User;
const ClubType = db.ClubType;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          req.login(user, { session: false }, async (err) => {
            const where = !user
              ? { show: 1 }
              : {
                  show: {
                    [Op.or]: [100, 1],
                  },
                };
            const users: UserType[] = await User.findAll({
              where: where,
              include: [
                {
                  model: ClubType,
                  required: false,
                },
              ],
            });
            if (!users) {
              res.status(204).json({ message: "not exist" });
              return;
            }
            // typeId number=>string
            const allUsers = serializeIndex(users);
            res.json({ allUsers });
            return;
          });
        } catch (error) {
          res.status(404);
          return next(error);
        }
      }
    )(req, res);
  },
  // editPage
  async update(req: any, res: Response, next: NextFunction) {
    const { profileImage, clubImage, ...user } = req.body;
    const id = parseInt(user.id);
    const email = user.email ? user.email : null;
    const name = user.name ? user.name : null;
    const typeType = user.typeId;
    const _user = await User.findOne({
      where: {
        email: email,
      },
    });
    const __user = await User.findOne({
      where: { name: name },
    });

    if (_user && _user.id !== id) {
      return res.status(200).json({
        error: "すでに登録されているメールアドレスです",
        code: "alreadyRegistered",
      });
    }
    if (__user && __user.id !== id) {
      return res.status(200).json({
        error: "すでに登録されているユーザー名です",
        code: "alreadyRegistered",
      });
    }

    const targetType = typeType
      ? await ClubType.findOne({
          where: {
            type: typeType,
          },
        })
      : undefined;
    const targetUser = formUpdate(user, targetType);
    try {
      const returnUser = await req.user.updateProfile(targetUser);
      if (!returnUser) {
        return res.status(400);
      } else {
        const updateUser = serializeUpdate(returnUser, typeType);
        res.status(201).json({ updateUser });
      }
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
