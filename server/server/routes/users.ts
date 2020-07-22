import express from "express";
import applicationController from "../controllers/applicationController";
// import usersController from "../controllers/usersController";

const usersRouter = express.Router();


//usersprofileAPI(UsersTable)
usersRouter.get("/:id", applicationController.userShow);
usersRouter.get("/", applicationController.userIndex);
usersRouter.post("/", applicationController.userCreate);
usersRouter.patch("/:id", applicationController.userUpdate);
usersRouter.delete("/:id", applicationController.userDelete);

//usersGearsAPI(WoodsTable,BallsTable)
// usersRouter.post("/:id/gears");
// usersRouter.patch("/:id/woods/:id");
// usersRouter.patch("/:id/balls/:id");
// usersRouter.delete("/:id/gears/:id");

//usersVideosAPI(VideosTable)
usersRouter.post("/:id/videos/",applicationController.videoCreate);
usersRouter.get("/:id/videos/", applicationController.videoIndex);
usersRouter.patch("/:id/videos/:videoid", applicationController.videoUpdate );
usersRouter.delete("/:id/videos/:videoid", applicationController.videoDelete);

//usersTournamentsAPI(TournamentsTable)
// usersRouter.post("/:id/tournaments");
// usersRouter.patch("/:id/tournaments/:id");
// usersRouter.delete("/:id/tournaments/:id");

//test
// usersRouter.get("/:id/onlyuser", applicationController.userShowtest);
// usersRouter.get("/:id/onlyuser", applicationController.userShowtest);

export { usersRouter };
