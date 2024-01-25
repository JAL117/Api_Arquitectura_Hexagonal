import express from "express";
import { addMedicationController, getAllMedicationController } from "./dependencies";

export const medicationRouter = express.Router();

medicationRouter.post("/", (req, res) => {
  try {
    addMedicationController.run.bind(addMedicationController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

medicationRouter.get("/", (req, res) => {
  try {
    getAllMedicationController.run.bind(getAllMedicationController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});