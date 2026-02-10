import { Button } from "@react-navigation/elements";
import { useCallback, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ScreenNames, StartScreenNavigationProp } from "./navigation/root-navigation";


function StartScreen({ navigation }: StartScreenNavigationProp) {
    const [size, setSize] = useState("");
    const [bombs, setBombs] = useState("");
    const [gameStatus, setGameStatus] = useState<Status>({ type: "playing" });

    const handleStart = useCallback((size: number, bombs: number) => {
        setGameStatus({ type: "playing" });
        navigation.navigate(ScreenNames.Game, { size, bombs, onLoss: () => setGameStatus({ type: "lost" }), onWin: () => setGameStatus({ type: "won" }), onReset: () => setGameStatus({ type: "playing" }) })
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", outlineColor: "black", outlineWidth: 1, outlineStyle: "solid" }}>
            <Text>Start Screen</Text>
            <View>
                <View style={inputRowStyle}>
                    <Text>Size:</Text>
                    <TextInput placeholder="Enter size" value={size} onChangeText={setSize} style={textInputStyle} />
                </View>
                <View style={inputRowStyle}>
                    <Text>Bombs:</Text>
                    <TextInput placeholder="Enter bombs" value={bombs} onChangeText={setBombs} style={textInputStyle} />
                </View>
            </View>

            <Button onPress={() => {
                handleStart(Number(size), Number(bombs))
            }} >
                "Start Game"
            </Button>
            <Text>{gameStatus.type}</Text>
        </View>
    )
}

export default StartScreen;
// Define the status type
type Status =
    | { type: "playing" }
    | { type: "lost" }
    | { type: "won" };

const textInputStyle = {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    width: 100,
}

const inputRowStyle = { flexDirection: "row" as const, gap: 10, marginBottom: 10, alignItems: "center" as const }