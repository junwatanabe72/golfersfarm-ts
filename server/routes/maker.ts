import express, { Request, Response } from "express";
import db from "../models";
import { MakerType } from "../models/maker";

const Maker = db.Maker;
const makersRouter = express.Router();

makersRouter.get("/", async (req: Request, res: Response) => {
  const allMakers: MakerType[] = await Maker.findAll();
  if (!allMakers) {
    res.status(204).json({ message: "not exist" });
    return;
  }
  res.json({ allMakers });
});

export { makersRouter };
