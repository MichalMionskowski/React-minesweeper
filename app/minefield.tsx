import { useCallback, useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { MineSquare } from "./mine-square"

export type Props = {
    size: number
}

const mine = {
    isBomb: false,
    isCleared: false,
    x: 0,
    y: 0,
}

export function MineField({size}: Props){
    const [mines, setMines] = useState(() => Array.from({length: size}).map((_, i) => (
        Array.from({length: size}).map((_, j) => ({
            ...mine,
            x: i,
            y: j,
        }))
    )))
    
    useEffect(() => {
        const bombi = Math.floor(Math.random() * size)
        const bombj = Math.floor(Math.random() * size)
        setMines(prev => {
            const newMines = [...prev];
            newMines[bombi][bombj] = {
                ...newMines[bombi][bombj],
                isBomb: true,
            }
            return newMines;
        })
    }, [])

    const handleClick = useCallback((i: number,j: number) => {
        setMines(prev => {
            const newMines = [...prev];
            newMines[i][j] = {
                ...newMines[i][j],
                isCleared: true,
            }
            return newMines;
        })
    },[])

    return(
        <View style={styles.container}>
            {Array.from({length: size}).map((_, i) => (
                <View key={i} style={styles.row}>
                    {Array.from({length: size}).map((_, j) => (
                        <MineSquare key={`${i}-${j}`} state={mines[i][j].isBomb && mines[i][j].isCleared ? "bomb" : mines[i][j].isCleared ? "cleared" : "default"} onClick={() => handleClick?.(i, j)}/>
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