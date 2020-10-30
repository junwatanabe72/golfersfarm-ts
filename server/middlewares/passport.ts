import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import passportJWT from "passport-jwt";
import { compare } from "bcrypt";
import dotenv from "dotenv";
import db from "../models";

const User = db.User;
const ClubType = db.ClubType;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
dotenv.config();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email: string, password: string, done: Function) {
      let user;
      try {
        user = await User.findOne({
          where: { email },
          include: [
            {
              model: ClubType,
              required: false,
            },
          ],
        });

        if (!user) {
          return done(null, false, { message: "No user by that email" });
        }
        let match = await compare(password, user.password);
        if (!match) {
          return done(null, false, { message: "Not a matching password" });
        }
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async function (jwtPayload: any, done: Function) {
      let user;
      try {
        user = await User.findOne({
          where: { id: jwtPayload.id },
          include: [
            {
              model: ClubType,
              required: false,
            },
          ],
        });
        if (!user) {
          return done(null, false, { message: "No user" });
        }
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    }
  )
);
