import path from "path";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import User from "./users";
import Ball from "./balls";
import Club from "./clubs";
import Video from "./videos";
import Shaft from "./shafts";
import Maker from "./makers";
import ClubType from "./clubTypes";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "../config/config.js"))[env];

export const sequelize = new Sequelize(config);

// (1)モデルを一つのオブジェクトにまとめる
const db: dbType = {
  User: User.initialize(sequelize),
  Ball: Ball.initialize(sequelize),
  Club: Club.initialize(sequelize),
  Video: Video.initialize(sequelize),
  Shaft: Shaft.initialize(sequelize),
  Maker: Maker.initialize(sequelize),
  ClubType: ClubType.initialize(sequelize),
};


interface dbType {
  [key: string]: any;// ←シグネチャー
  // associate(): void;

}

// (2)テーブル同士の関係を作成する
Object.keys(db).forEach((tableName) => {
  const model = db[tableName];
  if (model.associate) {
    model.associate();
  }
});

export default db;