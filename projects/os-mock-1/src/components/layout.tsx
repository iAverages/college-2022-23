import type { ReactNode } from "react";
import Sidebar from "./sidebar";

type LayoutProps = {
    children: ReactNode | ReactNode[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Sidebar>{children}</Sidebar>
        </div>
    );
};

export default Layout;
