import {setWinner} from "src/redux/entities/wins/winsSlice";
import {useAppDispatch, useAppSelector} from "src/redux/hooks";
import {GameWinner} from "src/types/GameWinner";

export const useWins = () => {
    return useAppSelector((state) => state.wins);
};

export const useSetWinner = () => {
    const dispatch = useAppDispatch();

    function set(winner: GameWinner) {
        dispatch(setWinner(winner));
    }

    return set;
};
