
/// 
const XENV = {
    NodeEnv: process.env.NODE_ENV,
    IsDev: process.env.NODE_ENV === 'development',
} as const;


export default XENV;