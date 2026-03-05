// =================================================================================
// Name:      : routes/index.ts
// Author     : Sam
// Description: Root route module that aggregates and exports all individual routes.
// =================================================================================

import { XRequest, XResponse, XRouter, XSendResponse } from "@/x-kit";
import AuthRouter from "./auth/auth.route";


/// Centralized route registry
/// Root Router (/api/*)
export const RootApiRouter = XRouter();


/// App Router Registry
RootApiRouter.use(`/auth`, AuthRouter);



/// Health Check route
RootApiRouter.get('/health', async (request: XRequest, response: XResponse): Promise<void> => {
    /// Send Response
    XSendResponse(response, 200, { message: 'Server is up and running', success: true })
})


export default RootApiRouter;