import create from "zustand";

interface CartStore {
    items: string[];
    add: (newItem: string) => void;
    remove: (removeItem: string) => void;
    clear: () => void;
}

const useCartStore = create<CartStore>((set) => ({
    items: [],
    add: (newItem: string) => set((state) => ({ items: [...state.items, newItem] })),
    remove: (removeItem: string) =>
        set((state) => {
            const index = state.items.indexOf(removeItem);
            if (index === -1) return { items: state.items };
            state.items.splice(index, 1);
            return { items: [...state.items] };
        }),
    clear: () => set({ items: [] }),
}));
export default useCartStore;
