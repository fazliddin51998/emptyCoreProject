import {Request, Response } from "express";

class MainController {

    public async main(req: Request, res: Response){
        res.send('MainController works')
    }
}

export default new MainController()