import { Router} from "express";
import HomeController from "../controllers/HomeController";


const routes = Router();


routes.get('/home', HomeController.index)

export default routes;