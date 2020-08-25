import express from "express";
import usersController from "../controllers/usersController";
import clubsController from "../controllers/clubsController";
import ballsController from "../controllers/ballsController";
import videosController from "../controllers/videosController";

const usersRouter = express.Router();

//usersprofileAPI(UsersTable)
usersRouter.get("/:id", usersController.show);
usersRouter.get("/", usersController.index);
usersRouter.post("/", usersController.create);
usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

//usersGearsAPI(clubsTable,BallsTable)
usersRouter.get("/:id/clubs", clubsController.index);
usersRouter.patch("/:id/clubs", clubsController.update);
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
