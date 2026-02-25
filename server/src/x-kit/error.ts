// =================================================================================
// Name:      : x-kit/error.ts
// Author     : Sam
// Description: Custom error class consistent error handling
// =================================================================================

export class XError extends Error {
    public code: number;

    constructor(error: { code: number; message: string }) {
        super(error.message);
        this.name = "XError";
        this.code = error.code;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const XErrorMsg = {
    // Internal Server Error -------------------
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: "Internal Server Error",
    },
    CREATION_FAILED: {
        code: 500,
        message: "Creation Failed",
    },
    DATABASE_ERROR: {
        code: 500,
        message: "Database Error",
    },
    UNEXPECTED_ERROR: {
        code: 500,
        message: "An unexpected error occurred",
    },
    METHOD_NOT_IMPLEMENTED: {
        code: 500,
        message: "Method not implemented.",
    },

    // 404: Not Found -------------------
    NOT_FOUND: {
        code: 404,
        message: "Not Found",
    },
    USER_NOT_FOUND: {
        code: 404,
        message: "User Not Found",
    },
    ADMIN_NOT_FOUND: {
        code: 404,
        message: "Admin User Not Found",
    },
    FRIEND_NOT_FOUND: {
        code: 404,
        message: "Friend Not Found",
    },

    //...
    MISSING_PARAMS: {
        code: 422,
        message: "Missing Required Parameters",
    },
    FORBIDDEN: {
        code: 403,
        message: "Forbidden",
    },
    NOT_ALLOWED: {
        code: 403,
        message: "Not Allowed",
    },
    BAD_REQUEST: {
        code: 400,
        message: "Bad Request",
    },
    PASSWORD_LENGTH: {
        code: 400,
        message: "Password length must be 8",
    },

    // Authentication -----------------------
    UNAUTHORIZED: {
        code: 401,
        message: "Unauthorized",
    },
    INVALID_CREDENTIALS: {
        code: 401,
        message: "Invalid Credentials",
    },
    INVALID_OTP: {
        code: 401,
        message: "Invalid OTP",
    },
    OTP_EXPIRED: {
        code: 401,
        message: "OTP Expired",
    },
    INVALID_PARAMS: {
        code: 401,
        message: "Invalid Params",
    },
    INVALID_SESSION: {
        code: 401,
        message: "Invalid Session",
    },
    SESSION_EXPIRED: {
        code: 401,
        message: "Session Expired",
    },
    ACCESS_DENIED: {
        code: 403,
        message: "Access Denied",
    },

    // Exists / Duplication Error
    PHONE_ALREADY_IN_USE: {
        code: 409,
        message: "Phone Already in Use",
    },
    EMAIL_ALREADY_IN_USE: {
        code: 409,
        message: "Email Already in Use",
    },
    EMAIL_PHONE_ALREADY_IN_USE: {
        code: 409,
        message: "Email or Phone Already in Use",
    },
    USERNAME_ALREADY_IN_USE: {
        code: 409,
        message: "Username Already taken",
    },
    DUPLICATION_ERROR: {
        code: 409,
        message: "Duplicate Entry",
    },

    // ...
    TOO_MANY_REQUESTS: {
        code: 429,
        message: "Too Many Requests",
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        message: "Service Unavailable",
    },
} as const;