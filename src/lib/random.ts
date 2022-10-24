export const getRandomArrayIndex = <T>(array: T[] = []): number => {
    return Math.floor(Math.random() * array.length);
};

export const getRandomArrayElement = <T>(array: T[] = []): T => {
    return array[getRandomArrayIndex(array)];
};
