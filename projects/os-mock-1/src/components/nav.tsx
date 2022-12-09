import useBool from "../hooks/useBool";

const Sidebar: React.FC = () => {
    const [isOpen, toggle] = useBool(false);

    return (
        <div>
            <div></div>
        </div>
    );
};

export default Sidebar;
