import * as fs from "fs";
const sharp = require("sharp");

export const deleteImage = async (oldValue: string) => {
  fs.unlink(oldValue, (err: any) => {
    if (err) throw err;
    console.log("削除しました");
  });
};

export const changeImagePath = (file: string | undefined) => {
  if (!file) {
    return undefined;
  }
  return `${process.env.URL}/${file}`;
};

export const resizeImageSharp = async (image?: any) => {
  if (!image) {
    return undefined;
  }
  const newFilename = `public/uploads/RESIZE-${image.filename}`;
  await sharp(image.path)
    .resize(300)
    .toFormat("jpeg")
    .jpeg({ quality: 100 })
    .toFile(newFilename);
  return newFilename;
};

export const processImages = async (image: any[]) => {
  if (!image) {
    return;
  }
  const imageData = image[0];
  const processedImage = await resizeImageSharp(imageData);
  const returnImage = changeImagePath(processedImage);
  deleteImage(imageData.path);
  return returnImage;
};
