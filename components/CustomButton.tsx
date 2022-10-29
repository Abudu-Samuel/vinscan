import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import { colors, fontSize } from "../constants";

type ButtonProps = {
  title: string;
  routeName: string;
  navigation: any;
};

export default function Button({ title, routeName, navigation }: ButtonProps) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigation.navigate(routeName)}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
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
});
