import React, { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import CustomButton from "../components/CustomButton";
import { colors } from "../constants";
import { RootStackScreenProps } from "../types";

const SearchScreen: FC<RootStackScreenProps<"SEARCH">> = ({ navigation }) => {
  const [searchText, setSearchText] = useState<string>("Scan a Vin Number");

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
                placeholder="useless placeholder"
                keyboardType="numeric"
              />
              <View style={styles.scanIcon}>
                <Entypo name="camera" size={22} color={colors.darkGreen} />
              </View>
            </View>
          </View>
          <View style={styles.button}>
          <CustomButton
            title="SEARCH"
            routeName="SEARCH"
            navigation={navigation}
          />
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
  input: {
    height: 45,
    width: "75%",
    margin: 12,
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
  button: {
    marginVertical: 15,
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
