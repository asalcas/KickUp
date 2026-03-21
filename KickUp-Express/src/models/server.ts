import express, { Application } from "express"
import userRouter from "../router/userRoutes.js"

class Servidor {
    private app: Application;
    private port: String;

    constructor() {
        this.app = express()
        this.port = process.env.PORT!
        this.listen();
        this.middlewares();
        this.serverRoutes();
        this.dbConecction();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("SERVIDOR FUNCIONANDO en el port: " + this.port)
        })
    }
    middlewares() {
        this.app.use(express.json())
    }
    serverRoutes() {
        this.app.use(userRouter)
    }
    dbConecction() {
        // Aqui es donde realizamos la conexion
    }
}

export default Servidor;