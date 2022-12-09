import type { ReactNode } from "react";
import Navigation from "./nav";

type LayoutProps = {
    children: ReactNode | ReactNode[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
