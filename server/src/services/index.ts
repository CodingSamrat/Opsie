// =================================================================================
// Name:      : services/index.ts
// Author     : Sam
// Description: Centralized export of all service modules.
// =================================================================================

import AuthService from "./auth/auth.service";


/// Importing individual services



/// Centralized service registry
const XServices = {
    auth: new AuthService(),


} as const;

export default XServices;