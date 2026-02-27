import { FastifyInstance } from "fastify";
import AuthHandler from "./auth.handler";


export default async function AuthRoutes(app: FastifyInstance) {
    app.post('/login', AuthHandler.Login);

}