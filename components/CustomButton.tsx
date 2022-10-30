import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { colors, fontSize } from "../constants";

type ButtonProps = {
  title: string;
  routeName: string;
  navigation: any;
  loading?: boolean;
};

export default function Button({
  title,
  routeName,
  navigation,
  loading,
}: ButtonProps) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(routeName)}
    >
      {loading ? (
        <View style={{flexDirection: 'row'}}>
          <ActivityIndicator color={colors.black} size="small" />
          <Text style={styles.text}>LOADING</Text>
        </View>
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
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