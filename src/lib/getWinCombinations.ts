const getWinCombinations = (size = 3) => {
    if (size <= 0) {
        throw new Error("Size must be greater than 0");
    }

    const getHVCombinations = () => {
        const combinations: number[][][] = [];

        for (let i = 0; i < size; i += 1) {
            const comboHorizontal: number[][] = [];
            const comboVertical: number[][] = [];

            for (let j = 0; j < size; j += 1) {
                comboHorizontal.push([i, j]);
                comboVertical.push([j, i]);
            }

            combinations.push(comboHorizontal);
            combinations.push(comboVertical);
        }

        return combinations;
    };

    const getDiagonalCombinations = (): number[][][] => {
        const combinations: number[][][] = [];

        const comboDiagonal: number[][] = [];
        const comboOppositeDiagonal: number[][] = [];

        for (let i = 0; i < size; i += 1) {
            comboDiagonal.push([i, i]);
            comboOppositeDiagonal.push([i, size - i - 1]);
        }

        combinations.push(comboDiagonal);
        combinations.push(comboOppositeDiagonal);

        return combinations;
    };

    return [...getHVCombinations(), ...getDiagonalCombinations()];
};

export default getWinCombinations;
