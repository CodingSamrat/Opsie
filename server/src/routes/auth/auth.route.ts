import AuthHandler from "./auth.handler";
import { XRouter } from "@/x-kit";


// App Routes (/api/v1/auth/*)
const AuthRouter = XRouter()
const Handler = new AuthHandler()


/// Register Routes
AuthRouter.post("/login", Handler.Login)


/// Return the router 
export default AuthRouter;