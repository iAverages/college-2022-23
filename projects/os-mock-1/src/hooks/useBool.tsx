import { useState } from "react";

/**
 * Custom hook to easily have a toggle between true and false states
 * @param initalValue Value to start hook at (true or false)
 * @returns
 */
const useBool = (initalValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState(initalValue);

    const toggle = () => setValue((prev) => !prev);

    return [value, toggle];
};

export default useBool;
