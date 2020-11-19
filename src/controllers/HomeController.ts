import {Request, Response } from "express";

class HomeController {

    public async index(req: Request, res: Response){
        res.send('HomeController works')
    }
}

export default new HomeController()