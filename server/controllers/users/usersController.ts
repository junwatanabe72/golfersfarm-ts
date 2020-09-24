import { Request, Response, NextFunction } from "express";
import db from "../../models";
import { userType } from "../../models/user";
import passport from "passport";
const User = db.User;

export default {
  async index(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
      "jwt",
      { session: false },
      async (err: any, user: any) => {
        try {
          if (err || !user) {
            const allUsers: userType[] = await User.findAll({
              where: { show: false },
            });

            if (!allUsers) {
              res.status(204).json({ message: "not exist" });
              return;
            }
            console.log(allUsers.length);
            res.json({ allUsers });
            return;
          }
          req.login(user, { session: false }, async (err) => {
            const allUsers: userType[] = await User.findAll({});

            if (!allUsers) {
              res.status(204).json({ message: "not exist" });
              return;
            }
            console.log(allUsers.length);
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
