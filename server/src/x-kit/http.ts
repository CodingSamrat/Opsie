import { Request, Response, NextFunction, Router } from "express";
import { XError, XErrorMsg } from "./error";


export function XSendResponse(res: Response, status: number, msg: any): Response { return res.status(status).json(msg); };


export function XAsyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
    return (req: Request, res: Response, next: NextFunction) =>
        fn(req, res, next)?.catch((error) => {

            if (error instanceof XError) {
                return XSendResponse(res, error.code, { error: error.message });
            }

            XSendResponse(res, XErrorMsg.INTERNAL_SERVER_ERROR.code, { error: XErrorMsg.INTERNAL_SERVER_ERROR.message });

            // Log error for debugging
            console.error(error);
        });
};


// Router wrapper, to handle XAsyncHandler automatically
export function XRouter(): Router {
    type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head' | 'all';
    type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;
    const router = Router();

    const methods: HttpMethod[] = ['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'all'];

    for (const method of methods) {
        const original = router[method].bind(router);
        (router as any)[method] = (path: string, ...handlers: AsyncHandler[]) => {
            const wrappedHandlers = handlers.map(h => XAsyncHandler(h));
            return original(path, ...wrappedHandlers);
        };
    }

    return router;
};


// Custom Request
export interface XRequest extends Request {
    // Add necessary things here to append into request

}

// Custom Response
export interface XResponse extends Response {
    // Custom Response
}