import { PgsqlMedicationRepository } from "./pgsqlMedicationRepository";
import { AddMedicationUseCase } from "../aplication/addMedicationUseCase";
import { AddMedicationController } from "./controller/addMedicationController";
import { GetAllMedicationUseCase } from "../aplication/getAllMedicationUseCase";
import { GetAllMedicationController } from "./controller/getAllMedicationController";

export const pgsqlMedicationRepository = new PgsqlMedicationRepository();

export const addMedicationUseCase = new AddMedicationUseCase(pgsqlMedicationRepository);
export const addMedicationController = new AddMedicationController(addMedicationUseCase);

export const getAllMedicationUseCase = new GetAllMedicationUseCase(pgsqlMedicationRepository);
export const getAllMedicationController = new GetAllMedicationController(getAllMedicationUseCase);


