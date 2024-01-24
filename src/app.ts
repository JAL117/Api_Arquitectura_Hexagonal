import express from 'express';
import { Signale } from 'signale';

import { initializeDatabase } from './database/sequelize'; 
import { userRouter } from './user/infraestructure/userRouter';
import { medicationRouter} from './medication/infraestructure/medicationRouter'

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/user',userRouter);
app.use('/medication',medicationRouter);


async function startServer() {
    try {


        await initializeDatabase();
        
     
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
    }
}


startServer();