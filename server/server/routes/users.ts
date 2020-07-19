import express from "express";
import usersController from "../controllers/usersController";

const usersRouter = express.Router();

//usersprofileAPI(UsersTable)
usersRouter.get("/:id",usersController.show);
usersRouter.get("/", usersController.index);
usersRouter.post("/", usersController.create);
// usersRouter.patch("/:id", usersController.update);
usersRouter.delete("/:id", usersController.delete);

//usersGearsAPI(ClubsTable,BallsTable,PuttersTable)
// usersRouter.post("/:id/gears");
// usersRouter.patch("/:id/gears/:id");
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
