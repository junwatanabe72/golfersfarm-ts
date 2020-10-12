import { Request, Response, NextFunction } from "express";
import db from "../../models";
import { UserType } from "../../models/user";
import passport from "passport";
const User = db.User;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          req.login(user, { session: false }, async (err) => {
            const where = !user ? { show: 0 } : {};
            const allUsers: UserType[] = await User.findAll({ where });

            if (!allUsers) {
              res.status(204).json({ message: "not exist" });
              return;
            }
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
  async update(req: Request, res: Response, next: NextFunction) {
    const { user } = req.body;
    const _user = await User.findOne({ where: { email: user.email } });
    const __user = await User.findOne({ where: { name: user.name } });
    if (!user.password || user.password.length < 8) {
      return res.status(200).json({
        error: "パスワードは8文字以上を設定してください",
        code: "invalidPassword",
      });
    }

    //
    if (_user) {
      return res.status(200).json({
        error: "すでに登録されているメールアドレスです",
        code: "alreadyRegistered",
      });
    }
    if (__user) {
      return res.status(200).json({
        error: "すでに登録されているユーザー名です",
        code: "alreadyRegistered",
      });
    }
    try {
      const updateUser = await User.updateProfile(req.params.id, user);
      if (!updateUser) {
        return res.status(400);
      } else {
        res.status(201).json({ updateUser });
      }
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const targetUser: any = await User.findOne({
        where: { id: req.params.id },
      });
      if (!targetUser) {
        res.json({ message: "check this userId" });
      }
      await targetUser.destroy();
      res.status(204).json({});
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
};
