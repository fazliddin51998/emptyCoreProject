import {Request, Response } from "express";
import {getRepository} from "typeorm";
import {User} from "../entity/User";

class UserController {

    public async users(req: Request, res: Response){
        const users = await getRepository(User).find();
        res.status(200).json(users);
    }
}

export default new UserController()