import { FastifyInstance } from 'fastify';
import * as Controller from './user.handler';


/**
 * Defines the user-related routes and their handlers.
 * @param app - The Fastify instance to which the routes will be registered.
 */
export default function UserRoutes(app: FastifyInstance) {
    app.get('/:id', Controller.GetUserById);

}