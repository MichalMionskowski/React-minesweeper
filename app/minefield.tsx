import { Button, StyleSheet, View } from "react-native"
import { useSetupMines } from "./hooks/useTodos"
import { MineSquare } from "./mine-square"

export type Props = {
    size: number,
    onLoss?: () => void,
    onWin?: () => void,
    onReset?: () => void,
}

export function MineField({ size, onLoss, onWin, onReset }: Props) {
    const { mines, handleClick, handleReset } = useSetupMines({ size, bombs: 3, onLoss: onLoss, onWin: onWin })
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