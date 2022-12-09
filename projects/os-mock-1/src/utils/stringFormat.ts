export const capital = (str: string | null | undefined) => {
    return str ? str.charAt(0).toUpperCase() + str.substring(1, str.length) : "";
};

export const capitalAll = (str: string | null | undefined) => {
    return str ? str.split(" ").map(capital).join(" ") : "";
};
