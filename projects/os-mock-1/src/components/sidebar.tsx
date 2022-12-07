import type { ReactNode } from "react";
import useBool from "../hooks/useBool";

type SidebarProps = {
    children: ReactNode | ReactNode[];
};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const [isOpen, toggle] = useBool(false);

    return (
        <div>
            <div></div>
            <div>{children}</div>
        </div>
    );
};

export default Sidebar;
