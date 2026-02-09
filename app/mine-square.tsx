import { StyleSheet, View } from 'react-native';


export type Props = {
  state?: 'default' | 'cleared' | 'bomb';
  onClick: () => void;
};

export function MineSquare({state = 'default', onClick}: Props) {

    return (
        <View style={state === 'default' ? styles.initial : state === 'cleared' ? styles.cleared : styles.bomb} onPointerDown={onClick}>
        
        </View>
    );
}

const styles = StyleSheet.create({
    initial: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
    },
    cleared : {
        width: 50,
        height: 50,
        backgroundColor: 'green',
    },
    bomb : {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    }
})