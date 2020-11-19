import "reflect-metadata"; //implement metadata

import {Server} from "./core/Server";
import {appConfig} from "./config/appConfig";


const server = new Server(appConfig);
server.run();