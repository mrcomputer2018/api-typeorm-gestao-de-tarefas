import { AppDataSource } from './database/data-source';
import { Express } from 'express';

const app: Express = express();

const port = process.env.PORT_SERVER || 3000;

AppDataSource.initialize()
    .then(async () => {
        app.listen( port), () => {
            console.log(`Servidor rodando na porta ${port}`);
        }
    })
    .catch(error => console.log(error));

function express(): Express {
    throw new Error('Ops. Aguma coisa aconteceu de errado no express.');
}

