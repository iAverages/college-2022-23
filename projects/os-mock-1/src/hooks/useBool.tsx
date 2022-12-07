import { useState } from "react";

const useBool = (initalValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState(initalValue);

    const toggle = () => setValue((prev) => !prev);

    return [value, toggle];
};

export default useBool;
