import { PgsqlUserRepository } from "./pgsqlUserRepository";

import { AddUserUseCase } from "../aplication/UseCase/addUserUseCase";
import { AdduserController } from "./controller/addUserController";

import { GetAllUsersUseCase } from "../aplication/UseCase/getAllUserUseCase";
import { GetAllUserController } from "./controller/getAllUserController";

import { GetByNameUserController } from "./controller/getByNameUserController";
import { GetByNameUserUseCase } from "../aplication/UseCase/getByNameUserUseCase";

import { HashingService } from "./helpers/hashingService";

export const pgsqlUserRepository = new PgsqlUserRepository();
export const hashingService = new HashingService();

export const addUserUseCase = new AddUserUseCase(pgsqlUserRepository , hashingService );
export const addUserController = new AdduserController(addUserUseCase);

export const getAllUsersUseCase = new GetAllUsersUseCase(pgsqlUserRepository);
export const getAllUserController = new GetAllUserController(getAllUsersUseCase);


export const getByNameUserUseCase = new GetByNameUserUseCase(pgsqlUserRepository);
export const getByNameUserController = new GetByNameUserController(getByNameUserUseCase);