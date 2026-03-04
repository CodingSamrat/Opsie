import AuthHandler from "./auth.handler";
import { XRouter } from "@/x-kit";


// App Routes (/api/v1/auth/*)
const AuthRouter = XRouter()


/// Register Routes
AuthRouter.post("/login", AuthHandler.Login)


/// Return the router 
export default AuthRouter;