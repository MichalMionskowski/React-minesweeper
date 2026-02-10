import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MineField } from "./minefield";
import { RootMinesweeperParamList } from "./navigation/root-navigation";
import StartScreen from "./start";

export default function Index() {
  const Stack = createNativeStackNavigator<RootMinesweeperParamList>();   
  return (
      <Stack.Navigator initialRouteName="Start" >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Game" component={MineField} />
      </Stack.Navigator>
  );
}
