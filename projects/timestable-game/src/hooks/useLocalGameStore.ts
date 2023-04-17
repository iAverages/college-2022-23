import useLocalStorage from "~/hooks/useLocalStorage";

enum Games {
    grid = "grid",
}

const useLocalGameStore = (gameName: string) => {
    const [store, setStore] = useLocalStorage<{ [gameName in Games]: number }>("scores", { grid: 0 });

    const mutate = (score: number | string) => {
        setStore((prev) => {
            return { ...prev, [gameName]: score };
        });
    };

    return [store, mutate] as const;
};

export default useLocalGameStore;
