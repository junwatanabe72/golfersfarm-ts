import express, { Request, Response } from "express";
import db from "../models";
import { ClubTypeType } from "../models/clubType";

const ClubType = db.ClubType;
const clubTypesRouter = express.Router();

clubTypesRouter.get("/", async (req: Request, res: Response) => {
  const allClubTypes: ClubTypeType[] = await ClubType.findAll();
  if (!allClubTypes) {
    res.status(204).json({ message: "not exist" });
    return;
  }
  res.json({ allClubTypes });
});

export { clubTypesRouter };
