import express from "express";

import { addMedicationController , getAllMedicationController } from "./dependencies";

export const medicationRouter = express.Router();

medicationRouter.post("/create", addMedicationController.run.bind(addMedicationController));
medicationRouter.get("/", getAllMedicationController.run.bind(getAllMedicationController));
