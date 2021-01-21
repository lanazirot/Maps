import React  from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";

export default ({title, ...rest}) => {
  return (
  <View style={styles.wrapper}>
      <Text>
          {title}
      </Text>
      <TextInput {...rest}/>
  </View>);
};

const styles = StyleSheet.create({
  wrapper: {
    height: 65,
    width: 120,
    maxWidth: 200
  }
})