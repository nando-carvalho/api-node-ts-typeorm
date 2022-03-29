import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();


router.get('/', function (req: Request, res: Response){
    return res.json({mensagem: 'Bem vindo a api node Dio!'});
});

router.post('/usuarios', createUserController.handle);

export {router};