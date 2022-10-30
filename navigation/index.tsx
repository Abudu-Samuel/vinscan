import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { Stack } from "../types";
import HomeScreen from "../Screens";
import SearchScreen from "../Screens/SearchScreen";
import BarCodeScannerScreen from "../Screens/BarcodeScanner";
import VehicleInfoScreen from "../Screens/VehicleInfo";
import SearchYearScreen from "../Screens/SearchYear";
import VehicleModelScreen from "../Screens/VehicleModels";

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SEARCH"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BARCODESCAN"
        component={BarCodeScannerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SEARCH_YEAR"
        component={SearchYearScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CAR_INFO"
        component={VehicleInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CARS_MODEL"
        component={VehicleModelScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
