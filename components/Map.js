import React from "react";
import MapView , {Marker} from "react-native-maps";
import {StyleSheet} from "react-native";
import {width, height} from '../dimensions';


export default ({onLongPress, puntos, visiblePoints}) => {

  

  return( 
  <MapView  onLongPress={onLongPress} style={styles.map}>
    {
     visiblePoints && puntos.map(punto => (
        <Marker flat={false} description={punto.coordenadas.longitude+":"+punto.coordenadas.latitude} coordinate={punto.coordenadas} title={punto.nombre} key={punto.nombre}/>
      ))
    }
  </MapView>);
};

const styles = StyleSheet.create({
    map: {
        width,
        height: height-150,
    }
})
