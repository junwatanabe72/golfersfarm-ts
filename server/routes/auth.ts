import express, { Request, Response } from "express";
import dotenv from "dotenv";
import passport from "passport";
import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import db from "../models";
import { serializeLogin } from "../utils/Serialize/user";

dotenv.config();
const authRouter = express.Router();
const User = db.User;
const Ball = db.Ball;

authRouter.post("/login", async (req: Request, res: Response) => {
  passport.authenticate("local", { session: false }, (err: any, user: any) => {
    if (err || !user) {
      console.error("hoge", err);
      return res.status(200).json({
        message: "somthing is not right",
        user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const payload = { id: user.id, email: user.email };
      const secret: any = process.env.SECRET;
      const token = jwt.sign(payload, secret);
      const loginUser = serializeLogin(user);
      return res.json({ loginUser, token });
    });
  })(req, res);
});

authRouter.get("/login", async (req: Request, res: Response) => {
  passport.authenticate("jwt", { session: false }, (err: any, user: any) => {
    try {
      if (err || !user) {
        console.error("hoge", err);
        return res.status(200).json({
          message: "no jwt",
          user,
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        const loginUser = serializeLogin(user);
        return res.json({ loginUser });
      });
    } catch (error) {
      res.status(404);
      return;
    }
  })(req, res);
});

authRouter.post("/signup", async (req: Request, res: Response) => {
  const { user } = req.body;
  try {
    const _user = await User.findOne({ where: { email: user.email } });
    const __user = await User.findOne({ where: { name: user.name } });
    if (!user.password || user.password.length < 8) {
      return res.status(200).json({
        error: "パスワードは8文字以上を設定してください",
        code: "invalidPassword",
      });
    }

    //
    if (_user) {
      return res.status(200).json({
        error: "すでに登録されているメールアドレスです",
        code: "alreadyRegistered",
      });
    }
    if (__user) {
      return res.status(200).json({
        error: "すでに登録されているユーザー名です",
        code: "alreadyRegistered",
      });
    }
    const autorizeToken = await hash(user.password, 10);
    delete user["password"];
    user.password = autorizeToken;
    const newUser = await User.add(user);
    const newBall = await Ball.add(newUser.id);
    res.status(201).json({ data: { newUser, newBall } });
  } catch (error) {
    res.status(404);
    return;
  }
});

export { authRouter };
