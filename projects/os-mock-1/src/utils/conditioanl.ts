const ifTrue = <T>(condition: boolean, value: T, def: T) => {
    return condition ? value : def;
};

export default ifTrue;
