import React, { FC, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { colors, fontSize } from "../constants";
import { RootStackScreenProps } from "../types";
import { getItemFromStorage } from "../utils/storage";
import { generateUniqueIds } from "../utils/generateUniqueId";

const VehicleModelScreen: FC<RootStackScreenProps<"CARS_MODEL">> = ({
  navigation,
  route,
}) => {
  const [vehicleModles, setVehicleModels] = useState([]);
  const vehicleYear = route.params?.vehicleYear;
  const vehicleMake = route.params?.vehicleMake;

  useEffect(() => {
    retrieveVehicleModel();
  }, []);

  const retrieveVehicleModel = async () => {
    const result: any = await getItemFromStorage("vehicle-models");
    setVehicleModels(JSON.parse(result));
  };

  const renderItem = ({ item }: any) => (
    <View style={{ top: 10, paddingVertical: 12 }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: colors.grey,
          backgroundColor: colors.grey,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/car_info.png")}
          resizeMode="contain"
          style={styles.img}
        />
        <View style={{ left: "17%" }}>
          <Text>Make: {item.Make_Name}</Text>
          <Text>Model: {item.Model_Name}</Text>
          <Text>Make ID: {item.Make_ID}</Text>
          <Text>Model ID: {item.Model_ID}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.goBack()} style={styles.backRow}>
            <Entypo name="chevron-left" size={22} color={colors.darkGreen} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <Text style={styles.makeText}>{vehicleMake}</Text>
          <Text style={styles.makeText}>{vehicleYear}</Text>
        </View>
        <View>
          {vehicleModles.length > 0 && (
            <FlatList
              data={vehicleModles}
              renderItem={renderItem}
              keyExtractor={() => generateUniqueIds()}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  makeText: {
    fontWeight: "bold",
    fontSize: fontSize.sm,
    color: colors.darkGreen,
  },
  backText: {
    color: colors.darkGreen,
    fontWeight: "bold",
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default VehicleModelScreen;
