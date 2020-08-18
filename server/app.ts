import express, { Request, Response,NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";
import http from "http";
import debug from "debug";
import dotenv from "dotenv";
import logger from "morgan";
import passport from "passport";
import "./middlewares/passport";
import { usersRouter } from "./routes/users";
// import { authRouter } from "./routes/auth";
// import { postsRouter } from "./routes/posts";

const rfs = require("rotating-file-stream");
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
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(passport.initialize());

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//router
app.get("/", (req: Request, res: Response,next: NextFunction) => {
  res.json({ message: "ok" });
});

// app.use("/auth", authRouter);
app.use("/users",usersRouter);
// app.use("/posts", passport.authenticate("jwt", { session: false }), postsRouter);

const server = http.createServer(app);
const port = process.env.PORT || "3000";

app.set("port", port);
server.listen(port);