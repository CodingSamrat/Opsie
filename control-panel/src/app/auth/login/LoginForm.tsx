"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { PROJECT_NAME } from "@/root.config";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onLogin() {
        toast.success("Logged in successfully!");
        router.push("/workspace/overview");
    }

    return (
        <div className="w-sm border border-dashed shadow-2xl rounded bg-accent/90  px-5 py-12">
            <div>
                <p className="text-center text-lg font-bold">Welcome to <span className="text-brand text-3xl uppercase tracking-widest">{PROJECT_NAME}</span></p>

            </div>
            <div className="mt-9">
                <Label htmlFor="email" className="mb-1">Email</Label>
                <Input value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="example@opsie.in" />
            </div>
            <div className="mt-5">
                <Label htmlFor="password" className="mb-1">Password</Label>
                <PasswordInput value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="* * * * * * * * * *" />
            </div>
            <div className="mt-9">
                <Button onClick={onLogin} className="w-full uppercase font-bold tracking-widest">Login</Button>
            </div>
            <div className="mt-9">
                <p className="text-center text-xs text-muted-foreground">
                    User registration is not allowed right now.
                    <br />If You don't have an account, contact your administrator.
                </p>
            </div>
        </div>
    )
}
