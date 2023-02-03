import { useEffect } from "react";
import useBreadcrumbsStore, { type BreadcrumbItem } from "./useBreadcrumbsStore";

/**
 * Custom hook to easily update global state for breadcrumb in UI for user.
 * @param item Item to show in breadcrumb
 */
const useBreadcrumb = (item: BreadcrumbItem) => {
    const add = useBreadcrumbsStore((state) => state.add);
    const remove = useBreadcrumbsStore((state) => state.remove);

    /**
     * This effect will run when this hook is ran on a component
     * and it will remove itself once it is unmounted from the DOM.
     * This has the effect of allowing us to easily abstract our
     * logic without having to have that logic on every page
     * where we add breadcrumbs
     */
    useEffect(() => {
        add(item);
        return () => {
            remove();
        };
    }, [add, remove, item]);
};

export default useBreadcrumb;
