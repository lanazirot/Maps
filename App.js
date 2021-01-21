import React, { useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";
export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombrePunto, setNombrePunto] = useState("");

  const [mode, setMode] = useState("new_point"); // new_point or all_points
  const [puntoTemporal, setPuntoTemporal] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const [visiblePoints, setVisiblePoints] = useState(true);

  const handleLongPress = ({ nativeEvent: { coordinate } }) => {
    setMode("new_point");
    setPuntoTemporal(coordinate); //almaceno el punto en algun lado por si vuelve a hacer click
    setModalVisible(true);
  };

  const handleChangeText = (text) => {
    setNombrePunto(text);
  };

  const handleSubmit = () => {
    const nuevoPunto = {
      nombre: nombrePunto,
      coordenadas: puntoTemporal,
    };
    setPuntos(puntos.concat(nuevoPunto));
    setModalVisible(false);
    setNombrePunto("");
    setPuntoTemporal({});
  };

  const handleListPressed = () => {
    setMode("all_points");
    setModalVisible(true);
  };

  const handleShowPressed = () => {
    setVisiblePoints(!visiblePoints);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setPuntoTemporal({});
    setNombrePunto("");
    setMode("all_points");
  };

  return (
    <View style={styles.container}>
      <Map
        visiblePoints={visiblePoints}
        onLongPress={handleLongPress}
        puntos={puntos}
      />
      <Panel
        handleListPressed={handleListPressed}
        handleShowPressed={handleShowPressed}
      />
      <Modal visibility={modalVisible}>
        {mode === "new_point" ? (
          <View style={styles.input}>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handleSubmit} />
            <TouchableOpacity onPress={handleCancel}>
              <View style={styles.cancelSumbit}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <List
            puntos={puntos}
            handleOk={() => {
              setModalVisible(false);
            }}
          />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cancelSumbit: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  cancelText: {
    color: "#EB524F",
    fontSize: 18,
  },
  input: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
