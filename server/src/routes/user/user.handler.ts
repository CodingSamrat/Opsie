import { getUserById } from '@/services/user/user.service';
import { FastifyRequest, FastifyReply } from 'fastify';

export async function GetUserById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
) {
    const { id } = request.params;

    const user = await getUserById(id);

    return reply.send(user);
}