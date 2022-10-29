import React, { FC, useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import { RootStackScreenProps } from "../types";
import { colors, fontSize } from "../constants";

const BarCodeScannerScreen: FC<RootStackScreenProps<"BARCODESCAN">> = ({
  navigation,
}) => {
  const [hasPermission, setHasPermission] = useState<unknown>(null);
  const [scanned, setScanned] = useState(false);
  const [isBackCamera, setIsBackCamera] = useState(true);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);
    navigation.navigate("SEARCH", {
      scannedValue: data,
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backRow}>
          <Entypo name="chevron-left" size={22} color={colors.darkGreen} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <Text style={styles.scanText}>Scan bar code</Text>
        <Text> </Text>
      </View>
      <View style={styles.cameraHeight}>
        <BarCodeScanner
          type={isBackCamera ? "back" : "front"}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          <Pressable
            onPress={() => setIsBackCamera(!isBackCamera)}
            style={styles.cameraButton}
          >
            <MaterialIcons
              name="flip-camera-ios"
              size={30}
              color={colors.white}
            />
          </Pressable>
        </BarCodeScanner>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
  },
  cameraHeight: {
    justifyContent: "center",
    top: "5%",
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  cameraButton: {
    alignSelf: "flex-end",
    right: "5%",
    top: "2%",
  },
  scanText: {
    fontWeight: "bold",
    fontSize: fontSize.md,
    marginTop: "10%",
    right: "50%",
  },
  backText: {
    color: colors.darkGreen,
    fontWeight: "bold",
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    top: "4%",
  },
});

export default BarCodeScannerScreen;
