import { Response, NextFunction } from "express";
import db from "../../models";
const dotenv = require("dotenv");
dotenv.config();
const users = db.User;

export default {
  async update(req: any, res: Response, next: NextFunction) {
    const { files } = req;
    const regex = /public/;
    const imagePath = files.profileImage
      ? `${process.env.URL}${files.profileImage[0].path.replace(regex, "")}`
      : undefined;
    const clubPath = files.clubImage
      ? `${process.env.URL}${files.clubImage[0].path.replace(regex, "")}`
      : undefined;
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
};
