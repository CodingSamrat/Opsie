import XServices from "@/services";
import { XRequest, XResponse, XSendResponse } from "@/x-kit";


export default class AuthHandler {
    async Login(request: XRequest, response: XResponse): Promise<void> {

        console.log(request.body);
        console.log(); await XServices.auth.Login()

        XSendResponse(response, 200, { message: 'logged in!', s: 9789 })
    }
}