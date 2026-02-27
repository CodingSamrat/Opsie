// =================================================================================
// Name:      : routes/index.ts
// Author     : Sam
// Description: Root route module that aggregates and exports all individual routes.
// =================================================================================

import AuthRoutes from "./auth/auth.route";
import UserRoutes from "./user/user.route";


/// Centralized route registry
const Routes = {
    UserRoutes,
    AuthRoutes,

} as const;

export default Routes;