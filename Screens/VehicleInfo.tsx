import React, { FC, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { colors, fontSize } from "../constants";
import { RootStackScreenProps } from "../types";
import { getItemFromStorage } from "../utils/storage";

type VehicleInfoProps = {
  length: number;
  0: {
    VIN: string;
    Make: string;
    Model: string;
    ModelYear: string;
    PlantCountry: string;
    Manufacturer: string;
    Doors: string;
    Trim: string;
    FuelTypePrimary: string;
    EngineHP: string;
    EngineCylinders: string;
    VehicleDescriptor: string;
    PlantCity: string;
    VehicleType: string;
    BodyClass: string;
  };
};

const VehicleInfoScreen: FC<RootStackScreenProps<"CAR_INFO">> = ({
  navigation,
  route,
}) => {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfoProps>([]);

  useEffect(() => {
    retrieveVehicleModel();
  }, []);

  const retrieveVehicleModel = async () => {
    const result: any = await getItemFromStorage("vehicle-info");
    setVehicleInfo(JSON.parse(result));
  };

  const renderItem = (key: string, value: string) => (
    <View style={{ flexDirection: "row", top: 10, paddingVertical: 5 }}>
      <View style={{ borderWidth: 2, borderColor: colors.darkGreen }} />
      <View style={{ left: 10 }}>
        <Text style={{ color: "grey", fontWeight: "bold" }}>{key}</Text>
        <Text style={{ fontWeight: "bold" }}>
          {value ? value : "Information not available"}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.backButtonTop}>
        <View style={styles.firstRow}>
          <Image
            style={styles.img}
            source={require("../assets/car_info.png")}
            resizeMode="contain"
          />
          <Pressable onPress={() => navigation.goBack()} style={styles.backRow}>
            <Entypo name="chevron-left" size={22} color={colors.darkGreen} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: "-10%", flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: "10%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: fontSize.lg,
                fontWeight: "bold",
              }}
            >
              Vehicle Information
            </Text>
            {vehicleInfo.length > 0 && (
              <View>
                {renderItem("VIN", vehicleInfo[0].VIN)}
                {renderItem("Make", vehicleInfo[0].Make)}
                {renderItem("Model", vehicleInfo[0].Model)}
                {renderItem("Year", vehicleInfo[0].ModelYear)}
                {renderItem("Country", vehicleInfo[0].PlantCountry)}
                {renderItem("Manufacturer", vehicleInfo[0].Manufacturer)}
                {renderItem("Doors", vehicleInfo[0].Doors)}
                {renderItem("Trim", vehicleInfo[0].Trim)}
                {renderItem("Fuel type", vehicleInfo[0].FuelTypePrimary)}
                {renderItem("Engine HP", vehicleInfo[0].EngineHP)}
                {renderItem("Cyclinders", vehicleInfo[0].EngineCylinders)}
                {renderItem(
                  "Vehicle desciptor",
                  vehicleInfo[0].VehicleDescriptor
                )}
                {renderItem("Plant city", vehicleInfo[0].PlantCity)}
                {renderItem("Vehicle type", vehicleInfo[0].VehicleType)}
                {renderItem("Body class", vehicleInfo[0].BodyClass)}
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  backButtonTop: {
    marginTop: "18%",
    flex: 1,
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    marginTop: "10%",
    paddingHorizontal: 20,
  },
  backText: {
    color: colors.darkGreen,
    fontWeight: "bold",
  },
  img: {
    alignSelf: "center",
    height: 350,
    width: 370,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
  },
  firstRow: {
    marginTop: "-15%",
  },
});

export default VehicleInfoScreen;
