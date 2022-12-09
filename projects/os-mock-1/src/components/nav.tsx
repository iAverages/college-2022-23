import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "./logo";

const Navigation: React.FC = () => {
    const { status } = useSession();

    return (
        <div className="flex items-center justify-between bg-zinc-900 p-4">
            <Logo height="40" width="40" />
            <div className="">
                <div>
                    {status === "authenticated" ? (
                        <button onClick={() => signOut()}>Signout</button>
                    ) : (
                        <button onClick={() => signIn("github")}>Login</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
