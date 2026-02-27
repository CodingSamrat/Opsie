import { getUserById } from '@/services/user/user.service';
import { FastifyRequest, FastifyReply } from 'fastify';

export default class UserHandler {
    static async GetUserById(
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) {
        const { id } = request.params;

        const user = await getUserById(id);

        return reply.send(user);
    }
}