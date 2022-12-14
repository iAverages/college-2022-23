import style from "./spinner.module.css";
import clsx from "clsx";

type SpinnerProps = {
    fullScreen?: boolean;
    className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({ fullScreen = false, className }) => (
    <div className={clsx(className, { "flex h-screen w-screen items-center justify-center": fullScreen })}>
        <div className={style.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Spinner;
