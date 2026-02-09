import { useState } from "react";
import { Text, View } from "react-native";
import { status } from "./game-state";
import { MineField } from "./minefield";

export default function Index() {
  const [gameStatus, setGameStatus] = useState<status>({ type: "playing" });
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MineField size={5} 
        onLoss={() => setGameStatus({ type: "lost" })}
        onWin={() => setGameStatus({ type: "won" })}
        onReset={() => setGameStatus({ type: "playing" })}
      />
      <Text>{gameStatus.type}</Text>
    </View>
  );
}
