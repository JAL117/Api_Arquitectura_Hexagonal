import express from "express";
import { addMedicationController, getAllMedicationController,deleteMedicationController } from "./dependencies";

export const medicationRouter = express.Router();

medicationRouter.post("/", addMedicationController.run.bind(addMedicationController));


medicationRouter.get("/", getAllMedicationController.run.bind(getAllMedicationController));

medicationRouter.delete('/', deleteMedicationController.run.bind(deleteMedicationController));