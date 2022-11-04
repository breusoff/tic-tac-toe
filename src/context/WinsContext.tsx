import React, {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from "react";
import {IWinsInfo} from "src/interfaces/IWinsInfo";
import emptyFunction from "src/lib/emptyFunction";
import winsStorage, {defaultWins} from "src/lib/localStorage/winsStorage";
import {GameWinner} from "src/types/GameWinner";

interface IWinsContext {
    wins: IWinsInfo;
    setWinner: (winner: GameWinner) => void;
}

const WinsContext = createContext<IWinsContext>({
    wins: defaultWins,
    setWinner: emptyFunction,
});

export const WinsContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [wins, setWins] = useState<IWinsInfo>(winsStorage.get());

    function setWinner(winner: GameWinner) {
        if (!winner) return;
        const count = wins[winner];
        const newWins: IWinsInfo = {...wins, [winner]: count + 1};
        setWins(newWins);
        winsStorage.set(newWins);
    }

    return (
        <WinsContext.Provider
            value={{
                wins,
                setWinner,
            }}
        >
            {children}
        </WinsContext.Provider>
    );
};

const useWinsContext = () => {
    return useContext(WinsContext);
};

export default useWinsContext;
