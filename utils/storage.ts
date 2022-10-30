import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItemToStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getItemFromStorage = async (
  key: string
): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};
