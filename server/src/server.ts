import Fastify from "fastify";

export default function OpsieServer() {
    const app = Fastify({ logger: true });

    app.get("/", async () => {
        return { okay: '233', env: process.env.NODE_ENV, db: process.env.DATABASE_URL };
    });

    return app;
}