import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { Stack } from "../types";
import HomeScreen from "../Screens";

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HOME"
        component={HomeScreen}
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
