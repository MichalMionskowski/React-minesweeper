import { StyleSheet, View } from "react-native"
import { useSetupMines } from "./hooks/useTodos"
import { MineSquare } from "./mine-square"

export type Props = {
    size: number
}

export const gridItem = {
    isBomb: false,
    isCleared: false,
    minesNearby: 0,
    x: 0,
    y: 0,
}

export function MineField({ size }: Props) {
    const { mines, handleClick } = useSetupMines(size)

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