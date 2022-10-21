import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Nav from "./nav";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { status } = useSession();
    const router = useRouter();

    if (status === "unauthenticated") {
        router.push("/api/auth/signin");
        return <></>;
    }

    // Might need to remove, not sure yet
    if (status === "loading") {
        return <div>Loading</div>;
    }

    return <Nav>{children}</Nav>;
};

export default Layout;
