import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { GoodFoodRegistered } from "@screens/BadFoodRegistered";
import { EditOrDeleteFoodRegistered } from "@screens/EditOrDeleteFoodRegistered";
import { BadFoodRegistered } from "@screens/GoodFoodRegistered";
import { PersonalPerformance } from "@screens/PersonalPerformance";
import { RegisterFood } from "@screens/RegisterFood";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="PersonalPerformance" component={PersonalPerformance} />
      <Screen name="RegisterFood" component={RegisterFood} />
      <Screen name="GoodFoodRegistered" component={GoodFoodRegistered} />
      <Screen name="BadFoodRegistered" component={BadFoodRegistered} />
      <Screen
        name="EditOrDeleteFoodRegistered"
        component={EditOrDeleteFoodRegistered}
      />
    </Navigator>
  );
}
