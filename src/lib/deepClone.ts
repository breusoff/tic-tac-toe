const deepClone = <T>(value: T) => {
    return JSON.parse(JSON.stringify(value));
};

export default deepClone;
