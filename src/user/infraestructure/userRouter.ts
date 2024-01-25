import express from "express";
import { addUserController, getAllUserController, getByNameUserController } from "./dependencies";

export const userRouter = express.Router();



userRouter.post('/', addUserController.run.bind(addUserController));

userRouter.get('/', getAllUserController.run.bind(getAllUserController));


userRouter.get("/search", getByNameUserController.run.bind(getByNameUserController));
