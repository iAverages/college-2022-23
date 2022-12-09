import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

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
