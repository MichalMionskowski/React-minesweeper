import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MineField } from "./minefield";
import { RootMinesweeperParamList, ScreenNames } from "./navigation/root-navigation";
import StartScreen from "./start";

export default function Index() {
  const Stack = createNativeStackNavigator<RootMinesweeperParamList>();   
  return (
      <Stack.Navigator initialRouteName={ScreenNames.Start} >
        <Stack.Screen name={ScreenNames.Start} component={StartScreen} />
        <Stack.Screen name={ScreenNames.Game} component={MineField} />
      </Stack.Navigator>
  );
}
