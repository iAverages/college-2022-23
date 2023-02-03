import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

/**
 * Get parameter based on current request.
 * NextJS router can return parameters as a
 * string or array of strings. This hook
 * abstracts this logic out for reuse
 * throughout the application
 * @param param Name of parameter
 * @returns
 */
const useRouteParam = (param: string) => {
    const router = useRouter();

    const [value, setValue] = useState("");

    useEffect(() => {
        const id = router.query[param];
        if (typeof id === "object") {
            setValue(id[0] ?? "");
            return;
        }
        setValue(id ?? "");
    }, [router, param]);

    return value;
};

export default useRouteParam;
