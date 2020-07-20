import express from "express";
import applicationController from "../controllers/applicationController";
// import usersController from "../controllers/usersController";

const usersRouter = express.Router();

//usersprofileAPI(UsersTable)
usersRouter.get("/:id", applicationController.show);
usersRouter.get("/", applicationController.index);
usersRouter.post("/", applicationController.create);
usersRouter.patch("/:id", applicationController.update);
usersRouter.delete("/:id", applicationController.delete);

//usersGearsAPI(WoodsTable,BallsTable)
// usersRouter.post("/:id/gears");
// usersRouter.patch("/:id/woods/:id");
// usersRouter.patch("/:id/balls/:id");
// usersRouter.delete("/:id/gears/:id");

//usersVideosAPI(VideosTable)
// usersRouter.post("/:id/videos", );
// usersRouter.patch("/:id/videos/:id", );
// usersRouter.delete("/:id/videos/:id", );

//usersTournamentsAPI(TournamentsTable)
// usersRouter.post("/:id/tournaments");
// usersRouter.patch("/:id/tournaments/:id");
// usersRouter.delete("/:id/tournaments/:id");


export { usersRouter };
