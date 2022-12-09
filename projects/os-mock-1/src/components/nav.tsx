import { signIn, useSession } from "next-auth/react";
import useBool from "../hooks/useBool";

const Sidebar: React.FC = () => {
    const [isOpen, toggle] = useBool(false);
    const { status } = useSession();

    return (
        <div>
            <div>{status === "authenticated" || <button onClick={() => signIn("github")}>Login</button>}</div>
        </div>
    );
};

export default Sidebar;
