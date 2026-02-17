import OpsieServer from "@/server";



const server = OpsieServer();

const port = Number(process.env.PORT) || 2121;

server.listen({ port, host: "0.0.0.0" }).catch((err) => {
    server.log.error(err);
    process.exit(1);
});
