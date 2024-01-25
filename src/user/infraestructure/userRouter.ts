import express from "express";
import { addUserController, getAllUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  try {
    getAllUserController.run.bind(getAllUserController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

userRouter.post("/create", (req, res) => {
  try {
    addUserController.run.bind(addUserController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

