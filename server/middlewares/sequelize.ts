import path from "path";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "../config/config.js"))[env];

const sequelize = new Sequelize(config, {
  define: {
    charset: "utf8mb4",
    collate: "utf8_general_ci",
    timestamps: true,
  },
});

export default sequelize;
