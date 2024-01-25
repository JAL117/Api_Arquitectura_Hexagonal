import express from "express";
import { addUserController, getAllUserController, getByNameUserController } from "./dependencies";

export const userRouter = express.Router();



userRouter.post('/', addUserController.run.bind(addUserController));

userRouter.get('/', (req, res) => {
  try {
    getAllUserController.run.bind(getAllUserController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

userRouter.get("/search", (req, res) => {
  try {
    getByNameUserController.run.bind(getByNameUserController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});