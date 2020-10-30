import { Response, NextFunction } from "express";
import db from "../../models";
import * as dotenv from "dotenv";

dotenv.config();

export default {
  async update(req: any, res: Response, next: NextFunction) {
    const { files } = req;
    try {
      const updateUser = await await req.user.updateImages(files);
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
