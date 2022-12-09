import { useEffect } from "react";
import useBreadcrumbsStore, { type BreadcrumbItem } from "./useBreadcrumbsStore";

const useBreadcrumb = (item: BreadcrumbItem) => {
    const add = useBreadcrumbsStore((state) => state.add);
    const remove = useBreadcrumbsStore((state) => state.remove);

    useEffect(() => {
        add(item);
        return () => {
            remove();
        };
    }, [add, remove, item]);
};

export default useBreadcrumb;
