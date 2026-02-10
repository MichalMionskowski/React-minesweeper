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

type StartScreenNavigationProp = NativeStackScreenProps<RootMinesweeperParamList, typeof ScreenNames.Start>;
type GameScreenNavigationProp = NativeStackScreenProps<RootMinesweeperParamList, typeof ScreenNames.Game>;


type RootMinesweeperParamList = {
    [ScreenNames.Start]: StartScreenNavigationProps;
    [ScreenNames.Game]: GameScreenNavigationProps;
}
    
export type { GameScreenNavigationProp, RootMinesweeperParamList, StartScreenNavigationProp, StartScreenNavigationProps };

export const ScreenNames = {
    Start: "Start",
    Game: "Game",
} as const;