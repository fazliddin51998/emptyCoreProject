import { Router } from "express";
import MainController from "../controllers/MainController";


const routes = Router();


routes.get('/', MainController.main)


export default routes;