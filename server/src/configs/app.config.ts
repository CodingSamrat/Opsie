import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import RootApiRouter from '@/routes';



/**
 * Builds and configures the Fastify application instance.
 * @returns A configured Fastify application instance ready to be started.
 */
export default async function BuildApp() {
    /// Initialize App
    const app = express();


    /// Middlewares
    // app.use(cors({
    //     origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : [],
    //     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    //     credentials: true
    // }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.urlencoded({ extended: true }));



    /// Register Routes
    app.use(`/api`, RootApiRouter);



    /// Returning the configured app
    return app;
}