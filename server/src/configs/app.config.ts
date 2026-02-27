import Routes from '@/routes/';
import Fastify from 'fastify';
import XENV from './env.config';

/**
 * Builds and configures the Fastify application instance.
 * @returns A configured Fastify application instance ready to be started.
 */
export default async function BuildApp() {
    /// Creating Fastify instance with logging enabled
    const app = Fastify({
        logger: XENV.IsDev ? {
            level: "info"
        } : {
            level: "warn"
        },
    });


    /// Health Check Endpoint
    app.get("/health", async () => {
        return { statusCode: 200, success: true, message: "Server is up & running..." };
    });


    /// Registering routes
    app.register(async (v1) => {
        v1.register(Routes.UserRoutes, { prefix: '/user' });
        v1.register(Routes.AuthRoutes, { prefix: '/auth' });
    }, { prefix: '/api/v1' });


    /// Returning the configured Fastify instance
    return app;
}