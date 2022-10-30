import React, { FC, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import useAxios from "axios-hooks";

import { colors, BASE_URL, fontSize } from "../constants";
import { RootStackScreenProps } from "../types";
import { setItemToStorage } from "../utils/storage";

const SearchScreen: FC<RootStackScreenProps<"SEARCH">> = ({
  navigation,
  route,
}) => {
  const [searchText, setSearchText] = useState<string | undefined>("");
  const scannedValue = route.params?.scannedValue;

  useEffect(() => {
    setSearchText(scannedValue);
  }, [scannedValue]);

  const [{ data, loading, error }, refetch] = useAxios(
    `${BASE_URL}/vehicles/DecodeVinValues/${scannedValue}?format=json&modelyear=2011`,
    {
      manual: !searchText,
    }
  );

  useEffect(() => {
    if (data) {
      setItemToStorage("vehicle-info", JSON.stringify(data.Results));
      return navigation.navigate("CAR_INFO");
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
            <Text style={styles.searchText}>Search by VIN</Text>
            <View style={styles.textInputRow}>
              <TextInput
                style={styles.input}
                pointerEvents="none"
                editable={false}
                value={searchText}
                placeholder="Scan a Vin Number"
                placeholderTextColor={colors.black}
                keyboardType="numeric"
              />
              <Pressable
                onPress={() => navigation.navigate("BARCODESCAN")}
                style={styles.scanIcon}
              >
                <Entypo name="camera" size={22} color={colors.darkGreen} />
              </Pressable>
            </View>
          </View>
          <View style={styles.button}>
            <Pressable
              disabled={!searchText}
              style={styles.buttonRow}
              onPress={() => refetch()}
            >
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
    width: "75%",
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

export default SearchScreen;
