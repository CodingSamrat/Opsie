// =================================================================================
// Name:      : x-kit/hash.ts
// Author     : Sam
// Description: Hashing and verifying hashed password 
// =================================================================================

import bcryptjs from "bcryptjs";


export function hash(password: string): string {
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    return hashedPassword;
}

export function compare(password: string, hash: string): boolean {
    try {
        if (!password || !hash) return false;
        return bcryptjs.compareSync(password, hash);
    } catch (error) {
        console.error("Error comparing password:", error);
        return false;
    }
}


