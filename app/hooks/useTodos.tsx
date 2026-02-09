import { useCallback, useState } from "react"
import { gridItem } from "../minefield"


export type responseProps = {
    mines: typeof gridItem[][],
    handleClick: (i: number, j: number) => void,
}

export function useSetupMines(size: number = 5, bombs: number = 3): responseProps {
    const bombMines = Array.from({ length: bombs }).map(() => {
        const bombi = Math.floor(Math.random() * size)
        const bombj = Math.floor(Math.random() * size)
        return { bombi, bombj }
    })

    const [mines, setMines] = useState(() => Array.from({ length: size }).map((_, i) => (
        Array.from({ length: size }).map((_, j) => (
            {
            ...gridItem,
            isBomb: bombMines.some(({ bombi, bombj }) => bombi === i && bombj === j),
            minesNearby :bombMines.reduce((acc, { bombi, bombj }) => {
                        if (Math.abs(bombi - i) <= 1 && Math.abs(bombj - j) <= 1) {
                            return acc + 1;
                        }
                        return acc;
                    }, 0),
            x: i,
            y: j,
        }))
    )))
    
    const handleClick = useCallback((i: number, j: number) => {
        console.log(i, j)
        setMines(prev => {
            const newMines = [...prev];
            newMines[i][j] = {
                ...newMines[i][j],
                isCleared: true,
            }
            return newMines;
        })
    }, [])

    return { mines, handleClick }
}


