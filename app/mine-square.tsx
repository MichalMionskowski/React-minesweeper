import { StyleSheet, View } from 'react-native';


export type Props = {
    state?: 'default' | 'cleared' | 'bomb';
    minesNearby: number;
    onClick: () => void;
};

export function MineSquare({ state = 'default', minesNearby = 0, onClick }: Props) {
    const stateStyle = state === 'default' ? styles.initial : state === 'cleared' ? styles.cleared : styles.bomb;

    return (
        <View style={[styles.base, stateStyle]} onPointerDown={onClick}>
            {state === 'cleared' ? minesNearby : null}
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    initial: {
        backgroundColor: 'gray',
    },
    cleared: {
        backgroundColor: 'green',
    },
    bomb: {
        backgroundColor: 'red',
    }
})