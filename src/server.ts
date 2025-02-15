import { AppDataSource } from './database/data-source';
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT_SERVER || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .then(async () => {
        app.listen( port), () => {
            console.log(`Servidor rodando na porta ${port}`);
        }
    })
    .catch(error => console.log(error));
