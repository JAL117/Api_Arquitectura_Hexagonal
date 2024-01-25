import { PgsqlUserRepository } from "./pgsqlUserRepository";

import { AddUserUseCase } from "../aplication/addUserUseCase";
import { AdduserController } from "./controller/addUserController";

import { GetAllUsersUseCase } from "../aplication/getAllUserUseCase";
import { GetAllUserController } from "./controller/getAllUserController";


export const pgsqlUserRepository = new PgsqlUserRepository();

export const addUserUseCase = new AddUserUseCase(pgsqlUserRepository);
export const addUserController = new AdduserController(addUserUseCase);

export const getAllUsersUseCase = new GetAllUsersUseCase(pgsqlUserRepository);
export const getAllUserController = new GetAllUserController(getAllUsersUseCase);


