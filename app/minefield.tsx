import { Button, StyleSheet, View } from "react-native";
import { useSetupMines } from "./hooks/useTodos";
import { MineSquare } from "./mine-square";
import { GameScreenNavigationProp } from "./navigation/root-navigation";


export function MineField({ route }: GameScreenNavigationProp) {
    const { size, bombs, onLoss, onWin, onReset } = route.params;
    const { mines, handleClick, handleReset } = useSetupMines({ size, bombs, onLoss, onWin })
    
    return (
        <View style={styles.container}>
            {Array.from({ length: size }).map((_, i) => (
                <View key={i} style={styles.row}>
                    {Array.from({ length: size }).map((_, j) => (
                        <MineSquare key={`${i}-${j}`} state={mines[i][j].isBomb && mines[i][j].isCleared ? "bomb" : mines[i][j].isCleared ? "cleared" : "default"}
                            minesNearby={mines[i][j].minesNearby}
                            onClick={() => handleClick?.(i, j)} />
                    ))}
                </View>
            ))}
            <Button title="Reset" onPress={() => {
                onReset?.()
                handleReset()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 1,
    },
    row: {
        flexDirection: 'row',
        gap: 1,
    }
})