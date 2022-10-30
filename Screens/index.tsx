import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import CustomButton from "../components/CustomButton";
import { colors, fontSize } from "../constants";
import { RootStackScreenProps } from "../types";

const HomeScreen: FC<RootStackScreenProps<"HOME">> = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.center}>
      <Image
        source={require("../assets/icon.png")}
        resizeMode="cover"
        style={styles.img}
      />
      <Text style={{ ...styles.header }}>VIN SCAN</Text>
      <View style={styles.secondColumn}>
        <Text style={styles.secondText}>Start your search by </Text>
        <Text style={styles.textBold}>VIN, Year, Make or Model</Text>
      </View>
      <View style={styles.thirdColumn}>
        <Text style={styles.secondText}>What would you like to search by?</Text>
        <View style={styles.button}>
          <CustomButton
            title="VIN"
            routeName="SEARCH"
            navigation={navigation}
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            title="YEAR / MAKE"
            routeName="SEARCH_YEAR"
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    marginVertical: 15,
  },
  center: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  img: {
    height: 90,
    width: 90,
  },
  secondColumn: {
    marginVertical: 30,
    alignItems: "center",
  },
  secondText: {
    fontSize: fontSize.md,
    lineHeight: 30,
  },
  textBold: {
    fontSize: fontSize.lg,
    color: colors.darkGreen,
    lineHeight: 30,
    fontWeight: "bold",
  },
  thirdColumn: {
    marginVertical: 10,
  },
});

export default HomeScreen;
