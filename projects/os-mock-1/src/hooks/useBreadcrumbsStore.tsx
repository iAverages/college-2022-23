import create from "zustand";

export type BreadcrumbItem = {
    name: string;
    href: string;
};

type BreadcrumbState = {
    items: BreadcrumbItem[];
    add: (item: BreadcrumbItem) => void;
    remove: () => void;
};

const useBreadcrumbsStore = create<BreadcrumbState>((set) => ({
    items: [],
    add: (item: BreadcrumbItem) => set((state) => ({ items: [...state.items, item] })),
    remove: () => set((state) => ({ items: state.items.slice(0, state.items.length - 1) })),
}));

export default useBreadcrumbsStore;
