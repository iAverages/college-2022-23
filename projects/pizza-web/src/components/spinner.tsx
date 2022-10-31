import styles from "./spinner.module.css";

const Spinner = () => (
    <div className={styles["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Spinner;
