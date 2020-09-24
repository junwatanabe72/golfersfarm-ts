import express, { Request, Response } from "express";
import dotenv from "dotenv";
import passport from "passport";
import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
import db from "../models";

dotenv.config();
const authRouter = express.Router();
const User = db.User;

authRouter.post("/login", async (req: Request, res: Response) => {
  passport.authenticate("local", { session: false }, (err: any, user: any) => {
    if (err || !user) {
      console.error("hoge", err);
      return res.status(400).json({
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
      return res.json({ user, token });
    });
  })(req, res);
});

authRouter.get("/login", async (req: Request, res: Response) => {
  passport.authenticate("jwt", { session: false }, (err: any, user: any) => {
    try {
      if (err || !user) {
        console.error("hoge", err);
        return res.status(400).json({
          message: "somthing is not right",
          user,
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        return res.json({ user });
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
    if (!user.password || user.password.length < 8) {
      return res.status(400).json({
        error: "パスワードは8文字以上を設定してください",
        code: "invalidPassword",
      });
    }
    if (_user) {
      return res.status(422).json({
        error: "すでに登録されているメールアドレスです",
        code: "alreadyRegistered",
      });
    }
    const autorizeToken = await hash(user.password, 10);
    delete user["password"];
    user.password = autorizeToken;
    const newUser = await User.add(user);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(404);
    return;
  }
});

export { authRouter };
