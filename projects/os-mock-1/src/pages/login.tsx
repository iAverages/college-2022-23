import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "../components/spinner/spinner";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        const run = async () => {
            if (status === "loading") return;
            if (status === "authenticated") {
                router.push("/dashboard");
                return;
            }
            signIn("github");
        };
        run();
    }, [status]);

    return (
        <main className="bg-slate-900">
            <div className="flex h-screen w-screen items-center justify-center">
                <Spinner />
            </div>
        </main>
    );
};

export default Login;
