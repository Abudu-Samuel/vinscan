import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HOME: undefined;
  SEARCH: { scannedValue: string } | undefined;
  BARCODESCAN: undefined;
  CAR_INFO: undefined;
  SEARCH_YEAR: undefined;
  CARS_MODEL: { vehicleYear: string ; vehicleMake: string} | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export const Stack = createNativeStackNavigator<RootStackParamList>();
