import Image from "next/image";
import LoginForm from "./LoginForm";
import { PROJECT_NAME } from "@/root.config";

export default function LoginPage() {
    return (
        <div className="grid place-items-center h-svh">
            <Image className="w-full h-full object-cover absolute top-0 left-0 -z-10 opacity-10 transition-all duration-300" src={'/login-bg.jpg'} width={1080} height={720} alt={PROJECT_NAME} />

            <div >
                <LoginForm />
            </div>
        </div>
    )
}
