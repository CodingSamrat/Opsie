import BuildApp from "@/configs/app.config";
import dotenv from "dotenv";

///Configure Environment Variables
dotenv.config({ quiet: true });


/**
 * Starts the Fastify server by building the application instance 
 * and listening on the specified port.
 */
async function start() {
    /// Build the Fastify application instance
    const app = await BuildApp();

    /// Listen on the specified port (default: 5000) 
    /// And handle any errors that occur during startup
    const PORT = Number(process.env.PORT) || 5000;


    /// Listen on all network interfaces (
    app.listen(PORT, () => {
        console.log(`\n🚀 Server is up and running!`);
        console.log('');
        // console.log(`🌐 Network   : http://${CsUtils.getNetworkIp()}:${PORT}`);
        console.log(`💻 Localhost : http://localhost:${PORT}`);
        console.log('📡 Status    : Listening for incoming requests...\n');
    });


    return null;
}


/// Starting the server
start();