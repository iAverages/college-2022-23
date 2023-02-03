import { useRouter } from "next/router";
import { useEffect } from "react";
import Spinner from "@components/spinner/spinner";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
    // Get data about current route
    const router = useRouter();
    // get session (authentication state) status
    const { status } = useSession();

    // On page load this function will be executed
    useEffect(() => {
        const run = async () => {
            // If we are still loading do nothing
            if (status === "loading") return;
            // If we are authenticated then redirect
            // user to /dashboard as they do not need
            // to login again
            if (status === "authenticated") {
                router.push("/dashboard");
                return;
            }
            // Begin logging the user in via Github
            signIn("github");
        };
        run();
    }, [status, router]);

    return (
        <main className="bg-slate-900">
            <div className="flex h-screen w-screen items-center justify-center">
                <Spinner />
            </div>
        </main>
    );
};

export default Login;
