import { XError, XErrorMsg } from "@/x-kit";


export default class AuthService {
    async Login(): Promise<void> {

        console.log("Login Service");
        throw new XError(XErrorMsg.BAD_REQUEST);

    }
}