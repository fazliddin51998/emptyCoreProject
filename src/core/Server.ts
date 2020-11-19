export class Server {

    app:any;
    middleware: any;
    route: any;
    viewEngine:any;
    port: number;
    dbConnection: any;
    constructor(config:any) {
        this.port = config.port;
        this.app = config.app;
        this.middleware = config.middleware;
        this.route = config.route;
        this.dbConnection = config.db;
    }

    initMiddleware(){
        for (let i =0; i < this.middleware.length; i++){
            this.app.use(this.middleware[i])
        }
    }

    initRoutes(){
        for (let i =0; i < this.route.length; i++){
            this.app.use(this.route[i])
        }
    }

    initServer(){
        this.app.listen(this.port,()=>{
            console.log(`Server at http://localhost:${this.port}`)
        })
    }

    run(){
        this.dbConnection().then(connection => {
            this.initMiddleware();
            this.initRoutes();
            this.initServer();
        }).then(err =>{
            if (err) throw new err
        })

    }

}