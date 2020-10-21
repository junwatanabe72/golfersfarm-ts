import { Response, NextFunction } from "express";
import sharp from "sharp";
import db from "../../models";
import * as dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();
const User = db.User;

const resizeImagesSharp = async (image?: any) => {
  if (!image) {
    return undefined;
  }
  const newFilename = `public/uploads/RESIZE-${image[0].filename}`;
  await sharp(image[0].path)
    .resize(300)
    .toFormat("jpeg")
    .jpeg({ quality: 100 })
    .toFile(newFilename);
  return newFilename;
};

const deleteImage = async (oldValue: string) => {
  await fs.unlink(oldValue, (err: any) => {
    if (err) throw err;
    console.log("削除しました");
  });
};

const changeImagePath = (file: string) => {
  if (!file) {
    return undefined;
  }
  const regex = /public/;
  return `${process.env.URL}${file.replace(regex, "")}`;
};
const selectUpdateItems = (profile?: string, club?: string) => {
  let updateItems: {
    profileImage?: string | undefined;
    clubImage?: string | undefined;
  } = {};
  updateItems["profileImage"] = profile ? changeImagePath(profile) : undefined;
  updateItems["clubImage"] = club ? changeImagePath(club) : undefined;
  return updateItems;
};

export default {
  async update(req: any, res: Response, next: NextFunction) {
    const { files } = req;

    const imagePath = await resizeImagesSharp(files.profileImage);
    if (imagePath) {
      await deleteImage(files.profileImage[0].path);
    }
    const clubPath = await resizeImagesSharp(files.clubImage);
    if (clubPath) {
      await deleteImage(files.clubImage[0].path);
    }
    const user = selectUpdateItems(imagePath, clubPath);

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
};
