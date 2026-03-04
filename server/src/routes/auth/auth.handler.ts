import { XRequest, XResponse, XSendResponse } from "@/x-kit";


export default class AuthHandler {
    static async Login(request: XRequest, response: XResponse): Promise<void> {

        console.log(request.body);

        XSendResponse(response, 200, { message: 'logged in!', s: 9789 })
    }
}