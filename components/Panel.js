import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
export default ({ handleListPressed, handleShowPressed }) => {
  return (
    <View style={styles.panel}>
      <TouchableOpacity onPress={handleListPressed}>
        <Text style={styles.botones}>Lista</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShowPressed}>
        <Text style={styles.botones}>Mostrar/Ocultar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#eeef",
  },
  botones: {
    fontSize: 23,
    margin: 5,
    color: "#52B7FF",
  },
});
