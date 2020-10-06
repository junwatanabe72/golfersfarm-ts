import express, { Request, Response, NextFunction, Router } from "express";
import path from "path";
import http from "http";
import debug from "debug";
import dotenv from "dotenv";
import logger from "morgan";
import passport from "passport";
import "./middlewares/passport";
import { usersRouter } from "./routes/users";
import { authRouter } from "./routes/auth";
import { makersRouter } from "./routes/maker";
import { shaftsRouter } from "./routes/shaft";
import { clubTypesRouter } from "./routes/type";

const rfs = require("rotating-file-stream");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req: any, file: any, cb: any) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
});
const app = express();
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

dotenv.config();
debug("express-typescript:server");

// setup the logger
app.use(logger("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(express.static("public"));
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Content-Type", "multipart/form-data");
  res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET,PATCH");
  next();
});

//router
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

const allRouters = [
  { path: "/auth", route: authRouter },
  { path: "/users", route: usersRouter },
  { path: "/makers", route: makersRouter },
  { path: "/types", route: clubTypesRouter },
  { path: "/shafts", route: shaftsRouter },
];
allRouters.forEach((route) => {
  app.use(route.path, route.route);
});

// app.use("/auth", authRouter);
// app.use("/users", usersRouter);
// app.use("/makers", makersRouter);
// app.use("/types", clubTypesRouter);
// app.use("/shafts", shaftsRouter);
const server = http.createServer(app);
const port = process.env.PORT || "3000";

app.set("port", port);
server.listen(port);
