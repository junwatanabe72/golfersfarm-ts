import { Request, Response, NextFunction } from "express";
import path from "path";
import db, { sequelize } from "../models";
import { userType } from "../models/user";
const users = db.User;
const clubs = db.Club;
const userClubs = db.UserClubs;
const balls = db.Ball;
const videos = db.Video;
const makers = db.Maker;
const shafts = db.Shaft;
const clubTypes = db.ClubType;
const URL = "http://localhost:3000/";

export default {
  //loginPage
  async show(req: Request, res: Response, next: NextFunction) {
    const { user } = req.body;
    try {
      const targetUser: userType = await users.findOne({
        where: { password: user.password, email: user.email },
      });
      res.json({ targetUser });
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
  //topPage
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      // const queryStatus: any = req.query.status ? req.query.status : statusValues;
      const allUsers: userType = await users.findAll({
        // where: { show: true },
      });

      if (!allUsers) {
        res.status(204).json({ message: "not exist" });
        return;
      }

      res.json({ allUsers });
      return;
    } catch (error) {
      res.status(404);
      return next(error);
    }
  },
  //signupPage
  async create(req: Request, res: Response, next: NextFunction) {
    const { user } = req.body;
    try {
      const newUser = await users.add(user);
      res.status(201).json({ newUser });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  },
  // editPage
  async update(req: Request, res: Response, next: NextFunction) {
    const { user } = req.body;
    try {
      const updateUser = await users.updateProfile(req.params.id, user);
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
  async updateImage(req: any, res: Response, next: NextFunction) {
    const { files } = req;
    const regex = /public/;

    const imagePath = files.profileImage
      ? `${URL}${files.profileImage[0].path.replace(regex, "")}`
      : null;

    const clubPath = files.clubImage
      ? `${URL}${files.clubImage[0].path.replace(regex, "")}`
      : null;

    const user = !imagePath
      ? { clubImage: clubPath }
      : clubPath
      ? { profileImage: imagePath, clubImage: clubPath }
      : { profileImage: imagePath };

    try {
      const updateUser = await users.updateProfile(req.params.id, user);
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
  // (req: any, res: Response) => {
  //   const { files, body } = req;
  //   if (files.profileImage) {
  //     const imagePath = files.profileImage[0].path;
  //     console.log(path.join(__dirname, imagePath));
  //   }

  //   if (files.clubImage) {
  //     const clubPath = files.clubImage[0].path;

  //     console.log(path.join(__dirname, clubPath));
  //   }
  //   console.log(files);
  //   // アップ完了したら200ステータスを送る
  //   res.status(200).json({ msg: "アップロード完了" });
  // }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const targetUser: any = await users.findOne({
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
