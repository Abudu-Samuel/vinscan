import React, { FC, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import useAxios from "axios-hooks";

import { colors, BASE_URL, fontSize } from "../constants";
import { RootStackScreenProps } from "../types";
import { setItemToStorage } from "../utils/storage";

const SearchYearScreen: FC<RootStackScreenProps<"SEARCH_YEAR">> = ({
  navigation,
}) => {
  const [year, setYear] = useState<string>("");
  const [make, setMake] = useState<string>("");

  const [{ data, loading, error }, refetch] = useAxios(
    `${BASE_URL}/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`,
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (data) {
      setItemToStorage("vehicle-models", JSON.stringify(data.Results));
      return navigation.navigate("CARS_MODEL", {
        vehicleYear: year,
        vehicleMake: make
      });
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.backButtonTop}>
        <View style={styles.firstRow}>
          <Image
            style={styles.img}
            source={require("../assets/car_icon.png")}
            resizeMode="cover"
          />
          <Pressable onPress={() => navigation.goBack()} style={styles.backRow}>
            <Entypo name="chevron-left" size={22} color={colors.darkGreen} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <View style={{ bottom: "10%" }}>
            <Text style={styles.searchText}>Search by Year, Make </Text>
            <TextInput
              style={styles.input}
              value={year}
              placeholder="Enter Year"
              placeholderTextColor={colors.black}
              keyboardType="numeric"
              onChangeText={(text) => setYear(text)}
            />
            <TextInput
              style={styles.input}
              value={make}
              placeholder="Enter Make"
              placeholderTextColor={colors.black}
              onChangeText={(text) => setMake(text)}
            />
          </View>
          <View style={styles.button}>
            <Pressable disabled={!make || !year} style={styles.buttonRow} onPress={() => refetch()}>
              {loading ? (
                <View style={{ flexDirection: "row" }}>
                  <ActivityIndicator color={colors.black} size="small" />
                  <Text style={styles.text}>LOADING</Text>
                </View>
              ) : (
                <Text style={styles.text}>SEARCH</Text>
              )}
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
  },
  button: {
    marginVertical: 0,
  },
  buttonRow: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: colors.lightGreen,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    fontSize: fontSize.base,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.black,
  },
  input: {
    height: 45,
    width: "95%",
    margin: 12,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: colors.white,
    padding: 10,
    top: 20,
    backgroundColor: colors.white,
    color: colors.black,
    shadowColor: colors.black,
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 5,
  },
  scanIcon: {
    height: 45,
    width: "17%",
    top: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    shadowColor: colors.black,
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButtonTop: {
    marginTop: "18%",
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    marginTop: "10%",
  },
  backText: {
    color: colors.darkGreen,
    fontWeight: "bold",
  },
  img: {
    alignSelf: "center",
  },
  firstRow: {
    marginTop: "-15%",
  },
  searchText: {
    textAlign: "center",
    fontSize: 25,
  },
});

export default SearchYearScreen;
