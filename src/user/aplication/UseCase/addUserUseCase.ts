import { User } from "../../domain/user";
import { UserRepository } from "../../domain/userRepository";
import { HashingService } from "../../infraestructure/helpers/hashingService";

export class AddUserUseCase{
    constructor( readonly userRepository: UserRepository , readonly hashingService : HashingService){}
    async run ( name: string, last_name: string , password:string , email:string): Promise<User | null>{
        try{
            const hashingPassword = await this.hashingService.hashPassword(password);
            const createUser = await this.userRepository.addUser(name, last_name,hashingPassword , email);

            return createUser;
        } catch(error){
            console.error('Error in AddUserCase', error);
            return null
        }
        
    }
}