import { useCallback, useState } from "react"

const gridItem = {
    isBomb: false,
    isCleared: false,
    minesNearby: 0,
    x: 0,
    y: 0,
}

export type responseProps = {
    mines: typeof gridItem[][],
    handleClick: (i: number, j: number) => void,
    handleReset: () => void,
}

export type Props = {
    size: number,
    bombs: number,
    onLoss?: () => void,
    onWin?: () => void
}

export function useSetupMines({ size = 5, bombs = 3, onLoss, onWin}: Props): responseProps {
    const [mines, setMines] = useState(() => initialiseGame(size, bombs))
    
    const handleClick = useCallback((i: number, j: number) => {
        if(mines[i][j].isBomb) {
            alert("Game Over")
            onLoss?.()
            setMines(prev => prev.map(row => row.map(cell => ({ ...cell, isCleared: true }))))
            return;
        }else{
            setMines(prev => {
            const newMines = [...prev];
            newMines[i][j] = {
                ...newMines[i][j],
                isCleared: true,
            }
            const allCleared = newMines.every(row => row.every(cell => cell.isCleared || cell.isBomb));
            if(allCleared) {
                alert("You Win!")
                onWin?.()
            }
            return newMines;
        }) 
        }
    }, [mines, onLoss, onWin])

    const handleReset = useCallback(() => {
        setMines(initialiseGame(size, bombs))
    }, [])
    
    return { mines, handleClick, handleReset }
}

function initialiseGame(size: number, bombs: number): typeof gridItem[][] {
    const bombMines = Array.from({ length: bombs }).map(() => {
        const bombi = Math.floor(Math.random() * size)
        const bombj = Math.floor(Math.random() * size)
        return { bombi, bombj }
    })

    return  Array.from({ length: size }).map((_, i) => (
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
    ))
}

