import { FastifyInstance } from 'fastify';
import UserHandler from './user.handler';


/**
 * Defines the user-related routes and their handlers.
 * @param app - The Fastify instance to which the routes will be registered.
 */
export default async function UserRoutes(app: FastifyInstance) {
    app.get('/:id', UserHandler.GetUserById);

}