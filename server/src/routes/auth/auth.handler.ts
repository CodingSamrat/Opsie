import { FastifyReply, FastifyRequest } from "fastify";


export default class AuthHandler {
    static async Login(
        request: FastifyRequest<{ Body: { email: string, password: string } }>,
        reply: FastifyReply
    ) {

        console.log(request.body.email);

        return reply.send({ message: "Login Successful!" });
    }
}