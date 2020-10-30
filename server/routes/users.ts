import express from "express";
import multer from "multer";
import path from "path";
import usersController from "../controllers/users/usersController";
import imagesController from "../controllers/users/imagesController";
import clubsController from "../controllers/users/clubsController";
import ballsController from "../controllers/users/ballsController";
import videosController from "../controllers/users/videosController";
import resultsController from "../controllers/users/resultsController";
import passport from "passport";

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

// getRoute
const getrouters = [
  { path: "/", route: usersController.index },
  { path: "/:id/clubs", route: clubsController.index },
  { path: "/:id/ball", route: ballsController.show },
  { path: "/:id/videos", route: videosController.index },
  { path: "/:id/results", route: resultsController.index },
];
getrouters.forEach((route) => {
  usersRouter.get(route.path, route.route);
});

// postRoute
usersRouter.post(
  "/:id/images",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "clubImage", maxCount: 1 },
  ]),
  passport.authenticate("jwt", { session: false }),
  imagesController.update
);

const postroutersWithAuth = [
  { path: "/:id/clubs/replace", route: clubsController.replace },
  { path: "/:id/videos/replace", route: videosController.replace },
  { path: "/:id/results/replace", route: resultsController.replace },
];

postroutersWithAuth.forEach((route) => {
  usersRouter.post(
    route.path,
    passport.authenticate("jwt", { session: false }),
    route.route
  );
});

// patchRoute
const patchroutersWithAuth = [
  { path: "/:id", route: usersController.update },
  { path: "/:id/ball", route: ballsController.update },
];

patchroutersWithAuth.forEach((route) => {
  usersRouter.patch(
    route.path,
    passport.authenticate("jwt", { session: false }),
    route.route
  );
});

export { usersRouter };
