import { NativeStackScreenProps } from "@react-navigation/native-stack";


type GameScreenNavigationProps = {
    size: number;
    bombs: number;
    onLoss?: () => void;
    onWin?: () => void;
    onReset?: () => void;
}

type StartScreenNavigationProps = {
    onStart: (size: number, bombs: number) => void;
}

type StartScreenNavigationProp = NativeStackScreenProps<RootMinesweeperParamList, 'Start'>;
type GameScreenNavigationProp = NativeStackScreenProps<RootMinesweeperParamList, 'Game'>;


type RootMinesweeperParamList = {
    Start: StartScreenNavigationProps;
    Game: GameScreenNavigationProps;
}
    
export type { GameScreenNavigationProp, RootMinesweeperParamList, StartScreenNavigationProp, StartScreenNavigationProps };

