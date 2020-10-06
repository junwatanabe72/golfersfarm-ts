import express, { Request, Response } from "express";
import db from "../models";
import { ShaftType } from "../models/shaft";

const Shaft = db.Shaft;
const shaftsRouter = express.Router();

shaftsRouter.get("/", async (req: Request, res: Response) => {
  const allShafts: ShaftType[] = await Shaft.findAll();
  if (!allShafts) {
    res.status(204).json({ message: "not exist" });
    return;
  }
  res.json({ allShafts });
});

export { shaftsRouter };
