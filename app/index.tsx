import { View } from "react-native";
import { MineField } from "./minefield";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MineField size={5} />
    </View>
  );
}
