import express from "express";
const multer = require("multer");
import path from "path";
// import { upload } from "../app";
import usersController from "../controllers/usersController";
import clubsController from "../controllers/clubsController";
import ballsController from "../controllers/ballsController";
import videosController from "../controllers/videosController";

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
const usersRouter = express.Router();

//usersprofileAPI(UsersTable)
//動作確認のため、仮作成。
usersRouter.post("/login", usersController.show);
//
usersRouter.get("/", usersController.index);
usersRouter.post("/", usersController.create);
usersRouter.post(
  "/:id/images",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "clubImage", maxCount: 1 },
  ]),
  usersController.updateImage
);
usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

//usersGearsAPI(clubsTable,BallsTable)
usersRouter.get("/:id/gears", clubsController.index);
usersRouter.post("/:id/gears", clubsController.create);
usersRouter.patch("/:id/clubs/:cid", clubsController.update);
usersRouter.post("/:id/ball", ballsController.create);
usersRouter.patch("/:id/ball", ballsController.update);
// usersRouter.delete("/:id/gears/:id");

//usersVideosAPI(VideosTable)
usersRouter.post("/:id/videos/", videosController.create);
usersRouter.get("/:id/videos/", videosController.index);
usersRouter.patch("/:id/videos/:videoid", videosController.update);
usersRouter.delete("/:id/videos/:videoid", videosController.delete);

//usersTournamentsAPI(TournamentsTable)
// usersRouter.post("/:id/tournaments");
// usersRouter.patch("/:id/tournaments/:id");
// usersRouter.delete("/:id/tournaments/:id");

//test
// usersRouter.get("/:id/onlyuser", applicationController.userShowtest);
// usersRouter.get("/:id/onlyuser", applicationController.userShowtest);

export { usersRouter };
