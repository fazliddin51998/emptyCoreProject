import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";


import UserRoutes from "../routes/UserRoutes";
import MainRoutes from "../routes/MainRoutes";
import HomeRoutes from "../routes/HomeRoutes";
import {createConnection} from "typeorm";


export const appConfig = {
    app: express(),
    port: 3000,
    middleware: [
        cors(),
        bodyParser.json(),
        bodyParser.text(),
        helmet(),
        bodyParser.urlencoded({ extended: true }),
    ],

    route: [
        UserRoutes,
        MainRoutes,
        HomeRoutes
    ],

    db: createConnection

}
