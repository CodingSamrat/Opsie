import BuildApp from "@/configs/app.config";


/**
 * Starts the Fastify server by building the application instance 
 * and listening on the specified port.
 */
async function start() {
    /// Build the Fastify application instance
    const app = await BuildApp();

    /// Listen on the specified port (default: 5000) 
    /// And handle any errors that occur during startup
    const port = Number(process.env.PORT) || 5000;
    const host = "0.0.0.0";

    /// Listen on all network interfaces (
    app.listen({ port, host }).catch((err) => {
        console.log(`🚀 Server up`);
        console.log(`   ENV: ${process.env.NODE_ENV ?? 'dev'}`);
        console.log(`   URL: http://${host}:${port}`);


        app.log.error(err);
        process.exit(1);

    });


    return null;
}


/// Starting the server
start();