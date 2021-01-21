import React from "react";
import { Modal, StyleSheet, View} from "react-native";
import { width } from "../dimensions";
//Modal adaptable para pasarle hijos y una visibilidad
export default ({children, visibility}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
          <View style={styles.center}>
            <View style={styles.modalView}>
              {
                children
              }
            </View>
          </View>
        </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  modalView: {
    minWidth: width - 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
  },
});
